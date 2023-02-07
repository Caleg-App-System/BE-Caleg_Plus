const c = require("../controllers/auth/index.js");
const mid = require("../middlewares/restrict.js");
const dataExample = require("../utils/data/data-example.json");

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
  fastify.get("/getdata", (req, res) => {
    const data = dataExample;

    if (!data) {
      return res.code(404).send({
        status: false,
        message: "data not found",
      });
    }

    return res.code(200).send({
      status: true,
      message: "data found",
      data: data,
    });
  });
  fastify.put("/verify", c.activate.verify);
}

module.exports = routes;
