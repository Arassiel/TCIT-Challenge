const {Router} = require('express');
const router = Router();

const {getPosts, insertPost,deletePost,getPostByName}  = require('../controllers/index.controller');

router.get('/posts', getPosts);
router.post('/posts', insertPost);
router.delete('/posts/:id', deletePost);
router.search('/posts/:name', getPostByName);

module.exports = router;