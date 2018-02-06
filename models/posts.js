"use strict";

const mongoose = require('mongoose');

// Define Schemes
const postsSchema = new mongoose.Schema({
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
postsSchema.statics.findAllPosts = function (params) {
  return this.find({ catagory: params.catagory }).sort({ _id: -1}).skip(params.page*5).limit(5);
};

// 조회
postsSchema.statics.findPosts = function (params) {
  return this.find({ params }).sort({ _id: -1}).skip(params.page*1).limit(1);
};

// 입력
postsSchema.statics.savePosts = function (params) {
  // this === Model
  const post = new this(params);
  // return Promise
  return post.save();
};

// 수정
postsSchema.statics.modfiyPosts = function (params, data) {
  return this.findOneAndUpdate(params, data, { new: true });
};

// 삭제
postsSchema.statics.removePosts = function (params) {
  return this.remove({ params });
};

// Create Model & Export
module.exports = mongoose.model('Posts', postsSchema);