const conn = require("../config/database")
const db = require("../models/index")
const User = require("../models/user")(db.sequelize, db.Sequelize)

const insertUser = async (user) => {
    await User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        email: user.email,
        password: user.password,
        phone: user.phone,
        birthday: user.birthday,
        city_id: user.city_id,
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
    updateRefreshToken
}