"use strict";

const mongoose = require('mongoose');

// Define Schemes
const postSchema = new mongoose.Schema({
  //id : { type: Number, required: true, unique: true },
  title: { type: String, required: true, unique: true }, //제목
  content: { type: String, required: true }, // 내용
  catagory: { type: String, required: true, default: "blog" }, // 카테고리
  flag: { type: Boolean, default: true}, // 상태
  writer: { type: String, required: true }, // 작성자
  tags: [{ // 테그
    tag: { type: String }
  }],
},
{
  timestamps: true
});



// 전체조회
postSchema.statics.findAll = function () {
  return this.find({});
};

// 조회
postSchema.statics.findOne = function (title) {
  return this.find({ title });
};

// 입력
postSchema.statics.create = function (data) {
  // this === Model
  const post = new this(data);
  // return Promise
  return post.save();
};

// 수정
postSchema.statics.modfiy = function (id, data) {
  return this.findOneAndUpdate({ id }, data, { new: true });
};

// 삭제
postSchema.statics.remove = function (id) {
  return this.remove({ id });
};

// Create Model & Export
module.exports = mongoose.model('Post', postSchema);