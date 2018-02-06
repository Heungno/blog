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
  pageInfo.description = "Node.js MongoDB PUG ";
  //res.render('bbs/list', { "pageInfo": pageInfo });
  res.redirect("/blog");
});

// file upload
router.post('/upload', upload.single('file'), function(req,res){
  console.log(req.file);
  res.send(req.file); // object를 리턴함
});

/* GET 글 입력 페이지*/
router.get('/:catagory/input', function(req, res, next) {
  pageInfo.catagory = req.params.catagory;
  pageInfo.description = "Node.js MongoDB PUG ";
  res.render('index', { "pageInfo": pageInfo });
});

/* GET 리스트 페이지*/
router.get('/:catagory', function(req, res, next) {
  pageInfo.catagory = req.params.catagory;
  pageInfo.description = "Node.js MongoDB PUG ";
  res.render('bbs/list', { "pageInfo": pageInfo });
});

/* GET 리스트 페이지*/
router.get('/chat/side', function(req, res, next) {
  res.sendfile('/html/chat.html');
});

module.exports = router;