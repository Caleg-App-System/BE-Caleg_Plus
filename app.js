require("dotenv").config();
const fastify = require("fastify")({ logger: true, prettyPrint: true });
const cors = require("fastify-cors");
const routes = require("./routes");
// const multer = require("fastify-multer");
// const upload = multer({ dest: "uploads/" });
const { PORT } = process.env;

// fastify.register(multer.contentParser);
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

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});

// testing
