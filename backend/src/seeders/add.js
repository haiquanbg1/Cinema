const conn = require('../config/database')
const { classifies, languages, categories, cinemas, cities, ranks, rooms, seats } = require('./data.json')

module.exports = async () => {
    cities.forEach(async element => {
        await conn.query(
            'insert into cities(city) values (?)',
            [element.city]
        )
    })

    categories.forEach(async element => {
        await conn.query(
            'insert into categories(name) values (?)',
            [element.name]
        )
    })

    classifies.forEach(async element => {
        await conn.query(
            'insert into classifies(title, description) values (?, ?)',
            [element.title, element.description]
        )
    })

    languages.forEach(async element => {
        await conn.query(
            'insert into languages(name) values (?)',
            [element.name]
        )
    })

    cinemas.forEach(async element => {
        await conn.query(
            'insert into cinemas (address,city_id,phone,email,details,name) values (?, ?, ?, ?, ?, ?)',
            [element.address, element.city_id, element.phone, element.email, element.details, element.name]
        )
    })

    ranks.forEach(async element => {
        await conn.query(
            'insert into ranks(title, money) values (?, ?)',
            [element.title, element.money]
        )
    })

    rooms.forEach(async element => {
        await conn.query(
            'insert into rooms(name, cinema_id) values (?, ?)',
            [element.name, element.cinema_id]
        )
    })

    seats.forEach(async element => {
        await conn.query(
            'insert into seats(name, type, room_id) values (?, ?, ?)',
            [element.name, element.type, element.room_id]
        )
    })
}
