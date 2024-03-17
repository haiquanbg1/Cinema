const User = require("../services/userService")

const postUser = async (req, res) => {
    let user = req.body
    auth = User.getUserByEmail(user.email)
    if (auth) {
        return res.status(500).json({
            errCode: 1,
            message: "email exist"
        })
    }

    password = await bcrypt.hash(user.password, 10)
    let now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }))

    user.password = password
    user['created_at'] = now
    user['updated_at'] = now

    await User.insertUser(user)

    return res.status(200).json({
        message: "success"
    })
}

module.exports = {
    postUser
}