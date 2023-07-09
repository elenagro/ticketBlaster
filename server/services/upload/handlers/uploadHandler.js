const strings = require("../../../pkg/strings");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/../../../images`);
  },
  filename: (req, file, callback) => {
    const randomString = strings.random(11);
    const type = file.mimetype.split("/")[1];
    callback(null, `image-${randomString}-${Date.now()}.${type}`);
  },
});

const filter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("This file is not supported"), false);
  }
};

const upload = multer({
  storageOption: storage,
  filterOption: filter,
});

const uploadImg = async (req, res) => {
  try {
    await upload.single("image")(req, res, (err) => {
      if (err) {
        return res.status(400).send("Upload Failed.");
      }

      if (!req.file) {
        return res.status(400).send("No File Selected");
      }

      const newFileName = req.file.filename;

      res.status(201).send(newFileName);
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  uploadImg,
};
