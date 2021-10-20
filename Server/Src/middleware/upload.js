const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  //location of the file
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  //unique file renaming with current timestamp and extension
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == "image/png" ||
      "image/jpg" ||
      "image/pdf" ||
      "image/docx"
    ) {
      callback(null, true);
    } else {
      console.log("File type not supported!");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
