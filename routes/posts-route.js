/**
 * posts route
 */
 
module.exports = function(app, fn) {
    // 전체조회
    app.get('/:catagory/posts',fn.findAllPosts);
    // 조회
    app.get('/:catagory/posts/:title', fn.findPosts);
    // 입력
    app.post('/:catagory/posts', fn.savePosts);
    // 수정
    app.put('/:catagory/posts/:title', fn.modfiyPosts);
    // 삭제
    app.delete('/:catagory/posts/:title', fn.removePosts);
};