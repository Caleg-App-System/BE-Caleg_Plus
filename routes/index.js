const cauth = require("../controllers/auth/index.js");
const cprov = require("../controllers/provinsi/index.js");
const ckab = require("../controllers/kabupaten/index.js");
const ckec = require("../controllers/kecamatan/index.js");
const cdesa = require("../controllers/desa/index.js");
const ctps = require("../controllers/tps/index.js");
const cdpp = require("../controllers/dpp/index.js");
const ccaleg = require("../controllers/caleg/index.js");
const cpolitic = require("../controllers/politicalParty/index.js");
const csuara = require("../controllers/suara/index.js");
const cupload = require("../controllers/upload/index.js");

const mid = require("../middlewares/restrict.js");
const dataExample = require("../utils/data/data-example.json");

const upload = require("../middlewares/upload");

async function routes(fastify, options) {
  // Auth
  fastify.post("/auth/login", cauth.login.login);
  fastify.post("/auth/register", cauth.register.register);
  fastify.get("/auth/getall", cauth.getAll.getAll);
  fastify.get("/auth/getbyid/:id", cauth.getbyid.getById);
  fastify.put("/auth/activate/role/:id", {
    preHandler: mid.mustLogin,
    handler: cauth.update.activateRole,
  });
  fastify.put("/verify", cauth.activate.verify);

  // TPS
  // fastify.post("/tps/create", ctps.create.create);

  // Desa
  // fastify.post("/desa/create", cdesa.create.create);

  // Kecamatan
  // fastify.post("/kecamatan/create", ckec.create.create);

  // Kabupaten
  fastify.post("/kabupaten/create", ckab.create.create);

  // Provinsi
  fastify.post("/provinsi/create", cprov.create.create);

  // DPP
  fastify.post("/dpp/create", cdpp.create.create);
  fastify.get("/dpp/count", cdpp.count.count);

  // Caleg
  // fastify.post("/caleg/create", ccaleg.create.create);

  // Politic Party
  // fastify.post("/politicparty/create", cpolitic.create.create);

  // Suara
  fastify.post("/suara/create", csuara.create.create);
  fastify.get("/suara/getall", csuara.getAll.getAll);
  fastify.get("/suara/count", csuara.count.count);

  fastify.get("/getdata", (req, res) => {
    const datapp = dataExample;

    if (!datapp) {
      return res.code(404).send({
        status: false,
        message: "data not found",
      });
    }

    return res.code(200).send({
      status: true,
      message: "data found",
      data: datapp,
    });
  });

  // Test Upload Multer
  fastify.post("/uploadFile", {
    preHandler: upload.single("file"),
    handler: cupload.create.upload,
  });
}

module.exports = routes;
