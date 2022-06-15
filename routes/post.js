const express = require('express');
const {getPosts, createPost} = require('../controllers/post');
const validator = require('../validators/index')

const router = express.Router();

router.get('/', getPosts);
router.post('/post', createPost);

// exports.getPosts = (req, res) => {
    // res.send("Hello world from node js");
// };

module.exports = router;

// module.exports = {
//     getPosts
// };

