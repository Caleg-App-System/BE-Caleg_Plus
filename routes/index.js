const fastify = require("fastify");
const c = require("../controllers/auth/index.js");

async function routes(fastify, options) {
  // Auth
  fastify.post("/auth/login", c.login.login);
  fastify.post("/auth/register", c.register.register);
  fastify.get("/auth/getall", c.getAll.getAll);
}

module.exports = routes;
