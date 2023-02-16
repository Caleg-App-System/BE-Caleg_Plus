const multer = require("multer");

const excelFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("application/vnd.ms-excel") ||
    file.mimetype.includes(
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
  ) {
    cb(null, true);
  } else {
    cb("Please upload only excel file", false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: excelFilter });
module.exports = uploadFile;
