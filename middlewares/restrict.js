require("dotenv").config();
const jwt = require("jsonwebtoken");
const { ROLE } = require("../utils/enum.js");

const { JWT_SECRET_KEY } = process.env;

module.exports = {
  mustLogin: async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];
      console.log(token);

      if (!token) {
        return res.code(401).send({
          status: false,
          message: "Unauthorized",
          data: null,
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      next();
    } catch (err) {
      if (err.message === "jwt malformed") {
        return res.code(401).send({
          status: false,
          message: err.message,
          data: null,
        });
      }

      next(err);
    }
  },
  mustSaksi: async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split("Bearer ")[1];

      if (!token) {
        return res.code(401).send({
          message: "Unauthorized",
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      if (decoded.role !== ROLE.SAKSITPS || decoded.role !== ROLE.ADMIN) {
        return res.code(401).send({
          message: "Unauthorized",
        });
      }

      next();
    } catch (err) {
      if (err.message === "jwt malformed") {
        return res.code(401).send({
          status: false,
          message: err.message,
          data: null,
        });
      }

      next(err);
    }
  },
  mustKoordes: async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split(" ")[1];

      if (!token) {
        return res.code(401).send({
          message: "Unauthorized",
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      if (decoded.role !== ROLE.KOORDES || decoded.role !== ROLE.ADMIN) {
        return res.code(401).send({
          message: "Unauthorized",
        });
      }

      next();
    } catch (err) {
      if (err.message === "jwt malformed") {
        return res.code(401).send({
          status: false,
          message: err.message,
          data: null,
        });
      }

      next(err);
    }
  },
  mustCaleg: async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split(" ")[1];

      if (!token) {
        return res.code(401).send({
          message: "Unauthorized",
        });
      }

      const decoded = jwt.verify(token, JWT_SECRET_KEY);

      if (decoded.role !== ROLE.CALEG || decoded.role !== ROLE.ADMIN) {
        return res.code(401).send({
          message: "Unauthorized",
        });
      }

      next();
    } catch (err) {
      if (err.message === "jwt malformed") {
        return res.code(401).send({
          status: false,
          message: err.message,
          data: null,
        });
      }

      next(err);
    }
  },
};
