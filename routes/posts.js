/**
 * posts
*/
const Posts = require('../models/posts');

// 전체조회
exports.findAllPosts = (req, res, next) => {
  console.log(`params: ${JSON.stringify(req.query)}`);
   Posts.findAllPosts({
      catagory: req.params.catagory,
      page:req.query.page
    }
  ).then(post => {
    if (!post.length) return res.status(404).send({ err: 'Not found' });
      res.send(post);
  }).catch(err => {
    res.status(500).send(err);
  });
};

// 조회
exports.findPosts = (req, res, next) => {
  Posts.findPosts({
    "title":req.params.title,
    "catagory":req.params.catagory
  }).then(post => {
    if (!post.length) return res.status(404).send({ err: 'Not found' });
      res.send(post);
  }).catch(err => {
    res.status(500).send(err);
  });
};

// 입력
exports.savePosts = (req, res, next) => {
  Posts.savePosts(req.body)
    .then(post => res.send(post))
    .catch(err => {
      
      console.error(err.message);
      res.status(500).send(err);
      
    });
};

// 수정
exports.modfiyPosts = (req, res, next) => {
  Posts.modfiy(req.params.id, req.body)
    .then(post => res.send(post))
    .catch(err => res.status(500).send(err));
};

// 삭제
exports.removePosts = (req, res, next) => {
  Posts.remove({
    "title": req.params.title,
    "catagory": req.params.title
  })
  .then(post => res.send(post))
  .catch(err => res.status(500).send(err));
};