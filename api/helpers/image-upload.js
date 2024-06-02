const multer = require("multer");

// Configurar o Multer para armazenar arquivos na memória
const storage = multer.memoryStorage();
const imageUpload = multer({
  storage: storage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error("Please, only send png or jpg!"));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };
