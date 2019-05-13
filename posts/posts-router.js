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

router.get('/:id', async(req, res) => {
    try {
        const post = await Posts.findById(req.params.id);

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: "Post not found."})
        }
    } catch(error){
        console.log(error);
        res.status(500).json({
            message: "Error retrieving post."
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