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
const cuser = require("../controllers/user/index.js");
const multer = require("fastify-multer");

const mid = require("../middlewares/restrict.js");
const dataExample = require("../utils/data/data-example.json");

const upload = require("../middlewares/upload.js");
const uploadImage = multer({ storage: upload.storage });

async function routes(fastify, options) {
  // Auth
  fastify.post("/auth/login", cauth.login.login);
  fastify.post(
    "/auth/register",
    {
      preHandler: upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "photo_ktp", maxCount: 1 },
      ]),
    },
    cauth.register.register
  );
  fastify.get("/auth/getall", cauth.getAll.getAll);
  fastify.get("/auth/getbyid/:id", cauth.getbyid.getById);
  fastify.put("/auth/activate/role/:id", {
    preHandler: mid.mustLogin,
    handler: cauth.update.activateRole,
  });
  fastify.put("/verify", cauth.activate.verify);

  // User
  fastify.put(
    "/update/archivet/:username",
    cuser.updateArchived.updateArchivedTrue
  );
  fastify.put(
    "/update/archivef/:username",
    cuser.updateArchived.updateArchivedFalse
  );
  fastify.put("/update/avatar", {
    preHandler: mid.mustLogin,
    handler: cuser.updatePhoto.updatePhoto,
  });
  fastify.put("/update/ktp", {
    preHandler: mid.mustLogin,
    handler: cuser.updatePhotoKtp.updatePhotoKTP,
  });
  fastify.put("/update/profile", {
    preHandler: mid.mustLogin,
    handler: cuser.updateBio.updateBio,
  });
  fastify.put("/update/working-area/:id", cuser.updateBio.updateWorkingArea);

  // TPS
  // fastify.post("/tps/create", ctps.create.create);
  fastify.get("/tps/getall", ctps.getAll.getAll);
  fastify.get("/tps/getById/:id", ctps.getById.getById);

  // Desa
  // fastify.post("/desa/create", cdesa.create.create);
  fastify.get("/desa/get/:districtId", cdesa.getall.getById);
  fastify.get("/desa/getall", cdesa.getall.getByTables);
  fastify.get("/desa/getById/:id", cdesa.getById.getById);

  // Kecamatan
  // fastify.post("/kecamatan/create", ckec.create.create);
  fastify.get("/kecamatan/get/:regencyId", ckec.getall.getById);
  fastify.get("/kecamatan/getall", ckec.getall.getAllByTables);
  fastify.get("/kecamatan/getById/:id", ckec.getById.getById);

  // Kabupaten
  fastify.post("/kabupaten/create", ckab.create.create);
  fastify.get("/kabupaten/get/:provinceId", ckab.getAll.getAll);
  fastify.get("/kabupaten/getall", ckab.getAll.getAllByTables);

  // Provinsi
  fastify.post("/provinsi/create", cprov.create.create);
  fastify.get("/provinsi/getall/json", cprov.getAll.getAll);
  fastify.get("/provinsi/getall", cprov.getAll.getAllByTables);

  // DPP
  fastify.post(
    "/dpp/create",
    { preHandler: upload.single("file") },
    cdpp.create.create
  );
  fastify.get("/dpp/getall", cdpp.getAll.getAll);
  fastify.get("/dpp/getById/:id", cdpp.getById.getById);
  fastify.get("/dpp/search", cdpp.filtering.filter);

  // Caleg
  fastify.post("/caleg/create", ccaleg.create.create);

  // Politic Party
  // fastify.post("/politicparty/create", cpolitic.create.create);
  fastify.post(
    "/parpol/uploadfile",
    {
      preHandler: upload.single("file"),
    },
    cpolitic.create.create
  );

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
  fastify.post("/uploadfile", {
    preHandler: upload.single("file"),
    handler: cupload.create.create,
  });
}

module.exports = routes;
