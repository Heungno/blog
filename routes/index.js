const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const pageInfo = {
  title: "흥",
  catagory: "",
  description: "",
};

/* GET home page. */
router.get('/', function(req, res, next) {
  pageInfo.catagory = req.params.catagory;
  pageInfo.description = "Node.js MongoDB PUG 공부중";
  res.render('index', { "pageInfo": pageInfo });
});

// file upload
router.post('/upload', upload.single('file'), function(req,res){
  console.log(req.file);
  res.send(req.file); // object를 리턴함
});

/* GET 글 입력 페이지*/
router.get('/:catagory/input', function(req, res, next) {
  pageInfo.catagory = req.params.catagory;
  pageInfo.description = "Node.js MongoDB PUG 공부중";
  res.render('index', { "pageInfo": pageInfo });
});

/* GET 리스트 페이지*/
router.get('/:catagory', function(req, res, next) {
  pageInfo.catagory = req.params.catagory;
  pageInfo.description = "Node.js MongoDB PUG 공부중";
  res.render('bbs/list', { "pageInfo": pageInfo });
});

module.exports = router;