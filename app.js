require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
// const routes = require("./routes");
const { PORT } = process.env;

// Home route
fastify.get("/", (req, res) => {
  return res.send("Welcome To Our API");
});

fastify.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
