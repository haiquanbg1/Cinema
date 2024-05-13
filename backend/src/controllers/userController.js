const User = require("../services/userService")
const bcrypt = require("bcryptjs")
const methods = require('../methods/authMethod')
const { successResponse, errorResponse } = require("../methods/response")

//
const register = async (req, res) => {
    try {
        let user = req.body

        // check email exist
        auth = await User.getUserByEmail(user.email)
        if (auth) {
            return errorResponse(res, 400, "Email đã tồn tại")
        }

        // hash password
        password = await bcrypt.hash(user.password, 10)

        user.email = user.email.toLowerCase()
        user.password = password

        await User.insertUser(user)

        return successResponse(res, 200, "Thành công")
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

//
const login = async (req, res) => {
    try {
        let { email, password } = req.body
        email = email.toLowerCase()

        // check email exist
        let user = await User.getUserByEmail(email)
        if (!user) {
            return errorResponse(res, 400, "Tài khoản không tồn tại")
        }

        // check password
        if (!bcrypt.compareSync(password, user.password)) {
            return errorResponse(res, 400, "Tài khoản hoặc mật khẩu sai")
        }

        const accessTokenLife = process.env.ACCESS_TOKEN_LIFE
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
        const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

        const dataForAccessToken = {
            user_id: user.id
        }
        const accessToken = await methods.generateToken(
            dataForAccessToken,
            accessTokenSecret,
            accessTokenLife,
        )

        let refresh_token = await methods.generateToken(
            dataForAccessToken,
            refreshTokenSecret,
            refreshTokenLife,
        ) // tạo 1 refresh token
        if (!user.refresh_token) {
            // Nếu user này chưa có refresh token thì lưu refresh token đó vào database
            await User.updateRefreshToken(user.id, refresh_token)
            user.refresh_token = refresh_token
        } else {
            // Nếu user này đã có refresh token thì lấy refresh token đó từ database
            refresh_token = user.refresh_token
        }
        dataUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            city_id: user.city_id,
            admin: user.is_admin
        }

        return successResponse(res, 200, "Thành công", {
            accessToken,
            refresh_token,
            dataUser
        })
    } catch (error) {
        console.log(error)
        return errorResponse(res, 500, "Đã có lỗi xảy ra")
    }
}

//
const refreshToken = async (req, res) => {
    // Lấy refresh token từ body
    const refreshTokenFromBody = req.body.refresh_token
    if (!refreshTokenFromBody) {
        return errorResponse(res, 400, "Refresh Token không tồn tại")
    }

    const accessTokenSecret =
        process.env.ACCESS_TOKEN_SECRET || jwtVariable.accessTokenSecret
    const accessTokenLife =
        process.env.ACCESS_TOKEN_LIFE || jwtVariable.accessTokenLife
    const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

    // Decode token đó
    const decoded = await methods.decodeToken(
        refreshTokenFromBody,
        refreshTokenSecret,
    )
    if (!decoded) {
        return errorResponse(res, 400, "Token không hợp lệ")
    }

    const user = await User.getUserByToken(refreshTokenFromBody)
    if (!user) {
        return errorResponse(res, 400, "Người dùng không tồn tại")
    }

    // Tạo access token mới
    const dataForAccessToken = {
        user_id: user.id,
    }

    const accessToken = await methods.generateToken(
        dataForAccessToken,
        accessTokenSecret,
        accessTokenLife,
    )

    const refreshToken = await methods.generateToken(
        dataForAccessToken,
        refreshTokenSecret,
        refreshTokenLife,
    )

    await User.updateRefreshToken(user.id, refreshToken)

    return successResponse(res, 200, "Thành công", {
        accessToken,
        refreshToken
    })
}

const getUserByAccessToken = async (req, res) => {
    return successResponse(res, 200, "Thành công", req.user)
}

module.exports = {
    register,
    login,
    refreshToken,
    getUserByAccessToken
}