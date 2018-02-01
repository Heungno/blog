/**
 * posts route
 */
module.exports = (app, fn) => {
    // 전체조회
    app.get('/posts',fn.findAll);
    // 조회
    app.get('/posts/:title', fn.find);
    // 입력
    app.post('/posts', fn.create);
    // 수정
    app.put('/posts/:title', fn.modfiy);
    // 삭제
    app.delete('/posts/:title', fn.remove);
};