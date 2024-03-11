const conn = require("../config/database")

const getHome = async (req, res) => {
    [results, fields] = await conn.query("Select * from users")
    return res.render("home.ejs", { users: results })
}

module.exports = {
    getHome
}