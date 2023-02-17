const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const {
  aboutUsControllerHindi,
  getAboutUsHindi,
} = require("../controllers/aboutUsControllerHindi");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads/aboutUs Hindi"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!"); // custom this message to fit your needs
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

const multipleUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "icons", maxCount: 4 },
]);

router.patch("/addAboutUsHindi", multipleUpload, aboutUsControllerHindi);
router.get("/getAboutUsHindi", getAboutUsHindi);

module.exports = router;
