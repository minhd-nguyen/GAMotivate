const Post = require('../models/post')

module.exports = {
    getPosts,
    getPostDetails,
    create,
    update:updatePost,
    deleteOne,
}

function getPosts(req, res) {
    Post.find({})
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
}

function getPostDetails(req, res) {
    Post.findById(req.params.id)
    .populate('questionThreads')
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

function create(req, res) {
    Post.create(req.body)
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

function updatePost(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Post.findByIdAndDelete(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.json(err))
}