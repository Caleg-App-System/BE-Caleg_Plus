const multer = require("fastify-multer");

// Set up storage for upload files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Define the file filter function
// const fileFilter = (req, file, cb) => {
//   const allowedExtensions = [".xlsx", ".xls", ".jpg", ".png", ".jpeg"];
//   const fileExtension = file.originalname.slice(-5);
//   if (allowedExtensions.includes(fileExtension)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// Intialize multer middleware with file filter
const upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
});

module.exports = upload;
