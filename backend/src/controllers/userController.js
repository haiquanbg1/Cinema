const User = require("../services/userService")
const bcrypt = require("bcrypt")

const postUser = async (req, res) => {
    let user = req.body

    // check email exist
    auth = await User.getUserByEmail(user.email)
    if (auth) {
        return res.status(500).json({
            errCode: 1,
            message: "email exist"
        })
    }

    // hash password
    password = await bcrypt.hash(user.password, 10)
    // get time now
    let now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }))

    user.password = password
    user['created_at'] = now
    user['updated_at'] = now

    await User.insertUser(user)

    return res.status(200).json({
        message: "success"
    })
}

const getUser = async (req, res) => {
    let { email, password } = req.body

    // check email exist
    auth = await User.getUserByEmail(email)
    if (!auth) {
        return res.status(500).json({
            errCode: 1,
            message: "email not exist"
        })
    }

    // check password
    if (!bcrypt.compareSync(password, auth.password)) {
        return res.status(500).json({
            errCode: 1,
            message: "password not correct"
        })
    }

    return res.status(200).json({
        errCode: 0,
        message: "success",
        data: auth
    })
}

module.exports = {
    postUser,
    getUser
}