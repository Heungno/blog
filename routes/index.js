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


router.get('/upload', function(req, res, next) {
  res.render('upload');
});

router.post('/upload', upload.single('file'), function(req,res){
  res.send(req.file.path); // object를 리턴함
  console.log(req.file.path); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
});

module.exports = router;