require("dotenv").config();
const fastify = require("fastify")({ logger: true, prettyPrint: true });
const cors = require("fastify-cors");
const routes = require("./routes");
const fastifyMulter = require("fastify-multer");
const multer = require("multer");
const fs = require("fs");
// const upload = multer({ dest: "uploads/" });
const { PORT } = process.env;

fastify.register(
  require("@fastify/formbody", {
    bodyLimit: 1024 * 1024,
    parser: {
      // Mengatur opsi payload
      multipart: true,
      formidable: {
        maxFileSize: 50 * 1024 * 1024, // Mengatur batasan ukuran file menjadi 10MB (10 megabyte)
      },
    },
  })
);
// fastify.register(fastifyMulter.contentParser);
fastify.register(
  require("@fastify/multipart", {
    attachFieldsToBody: true,
    limits: {
      fileSize: 50 * 1024 * 1024, // Set the maximum file size limit (10MB in this example)
    },
  })
);
fastify.register(require("@fastify/express"));

fastify.register(cors, {
  origin: "*",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Origin",
    "X-Requested-With",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
});

fastify.register(require("@fastify/view"), {
  engine: {
    ejs: require("ejs"),
  },
  root: __dirname + "views",
  propertyName: "render",
});

fastify.register(routes);
// Home route
fastify.get("/", (req, res) => {
  return res.send("Welcome To Our API");
});

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${address}`);
});
