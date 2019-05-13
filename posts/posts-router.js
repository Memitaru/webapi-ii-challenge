const express = require('express');

const Posts = require('../data/db.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.body);
        res.status(200).json(posts);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving posts."
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const post = await Posts.insert(req.body);
        res.status(201).json(post);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Error adding new post."
        })
    }
})


module.exports = router;