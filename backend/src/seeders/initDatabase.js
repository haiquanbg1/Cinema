const init = require('./init')
const add = require('./add')

const initDb = async () => {
    await init()
    await add()
}

initDb()