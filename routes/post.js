/**
 * posts
*/
const Post = require('../models/post');

// 전체조회
exports.findAll = (req, res, next) => {
  Post.findAll()
    .then(post => {
      if (!post.length) return res.status(404).send({ err: 'Not found' });
        res.send(post);
    })
    .catch(err => {
      res.status(500).send(err);
  });
};

// 조회
exports.find = (req, res, next) => {
  Post.findOne(req.params.id)
    .then(post => {
      if (!post.length) return res.status(404).send({ err: 'Not found' });
        res.send(post);
    })
    .catch(err => {
      res.status(500).send(err);
  });
};

// 입력
exports.create = (req, res, next) => {
  Post.create(req.body)
    .then(post => res.send(post))
    .catch(err => res.status(500).send(err));
};

// 수정
exports.modfiy = (req, res, next) => {
  Post.modfiy(req.params.id, req.body)
    .then(post => res.send(post))
    .catch(err => res.status(500).send(err));
};

// 삭제
exports.remove = (req, res, next) => {
  Post.remove(req.params.id)
    .then(post => res.send(post))
    .catch(err => res.status(500).send(err));
};