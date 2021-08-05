const createFastify = require("fastify");
const fastifyNextJs = require("@applicazza/fastify-nextjs");

const dev = process.env.NODE_ENV !== "production";

async function start() {
  const fastify = createFastify();

  fastify.register(fastifyNextJs, {
    dev,
  });

  await fastify.after();

  fastify.passNextJsRequests();

  await fastify.listen(3001);
}

start();
