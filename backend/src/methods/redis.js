const { createClient } = require('redis')

const client = createClient({
    username: 'root',
    password: 'Phamquan2004@',
    socket: {
        host: 'redis-16205.c1.ap-southeast-1-1.ec2.redns.redis-cloud.com',
        port: 16205,
    }
});


client.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await client.connect();
})();

module.exports = client