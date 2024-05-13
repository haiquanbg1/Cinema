const { refreshToken } = require("../controllers/userController")
const { User } = require("../models/index")

const insertUser = async (user) => {
    console.log(user)
    await User.create({
        gender: user.gender,
        email: user.email,
        password: user.password,
        phone: user.phone,
        birthday: user.birthday,
        city_id: user.city_id,
        rank_id: 1,
        firstName: user.firstName,
        lastName: user.lastName,
    })
}

const getUserByEmail = async (email) => {
    result = await User.findOne({
        where: {
            email: email
        }
    })
    return result
}

const getUserById = async (user_id) => {
    result = await User.findOne({
        where: {
            id: user_id
        }
    })
    return result
}

const getUserByToken = async (refreshToken) => {
    result = await User.findOne({
        where: {
            refresh_token: refreshToken
        }
    })
    return result
}

const updateRefreshToken = async (user_id, refresh_token) => {
    await User.update({
        refresh_token: refresh_token
    }, {
        where: {
            id: user_id
        }
    })
}

module.exports = {
    insertUser,
    getUserByEmail,
    getUserById,
    updateRefreshToken,
    getUserByToken
}