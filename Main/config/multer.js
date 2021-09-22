const multer = require('multer');
const Datauri = require('datauri/parser');
const path = require('path');

const storage = multer.memoryStorage();
const multerUploads = multer({storage});

const dUri = new Datauri();

const datauri = req => {
    console.log(req.body, req.file)
    return dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);;

}
module.exports = {multerUploads, datauri }

// return dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);