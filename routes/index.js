const c = require("../controllers/auth/index.js");
const mid = require("../middlewares/restrict.js");

async function routes(fastify, options) {
  // Auth
  fastify.post("/auth/login", c.login.login);
  fastify.post("/auth/register", c.register.register);
  fastify.get("/auth/getall", c.getAll.getAll);
  fastify.get("/auth/getbyid/:id", c.getbyid.getById);
  fastify.put("/auth/activate/role/:id", {
    preHandler: mid.mustLogin,
    handler: c.update.activateRole,
  });
  // fastify.put(
  //   "/auth/activate/account/:id",
  //   mid.mustLogin,
  //   c.update.activateAccount
  // );

  fastify.put("/verify", c.activate.verify);
}

module.exports = routes;
