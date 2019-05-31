const fastify = require('fastify')()
const fibSeq = require('./fib');

fastify.get('/', async (request, reply) => {
    return fibSeq()
})

const start = async () => {
    try {
        await fastify.listen(3000)
        console.log("started")
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
