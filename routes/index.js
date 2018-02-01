const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD TEST' });
});

// file upload
router.post('/upload', upload.single('file'), function(req,res){
  res.send(req.file); // object를 리턴함
});

module.exports = router;