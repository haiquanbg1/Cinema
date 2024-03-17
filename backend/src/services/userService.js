const conn = require("../config/database")
const bcrypt = require("bcrypt")

const insertUser = async (user) => {
    password = await bcrypt.hash(user.password, 10)
    let now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }))
    await conn.query(
        "insert into users(firstname, lastname, gender, email, password, phone, birthday, city_id, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            user.firstname,
            user.lastname,
            user.gender,
            user.email,
            password,
            user.phone,
            user.birthday,
            user.city_id,
            now,
            now
        ]
    )
}

const getUserByEmail = async (email) => {
    [result, field] = await conn.query(
        'select * from users where email = ?',
        [email]
    )
    return result
}

module.exports = {
    insertUser,
    getUserByEmail
}