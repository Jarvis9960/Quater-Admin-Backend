const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  interiorDesignerController, getInteriorDesigner
} = require("../controllers/interiorDesignerController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads/Interior Design"));
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

const multipleUpload = upload.fields([{ name: "images", maxCount: 3 }]);

router.patch(
  "/addInteriorDesigner",
  multipleUpload,
  interiorDesignerController
);

router.get("/getInteriorDesigner", getInteriorDesigner)

module.exports = router;
