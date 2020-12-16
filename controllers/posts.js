const Post = require('../models/post')

module.exports = {
    getPosts,
    getPostDetails,
    create,
    deleteOne,
}

function getPosts(req, res) {
    Post.find({})
    .populate('postedBy')
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
}

function getPostDetails(req, res) {
    Post.findById(req.params.id)
    .populate('postedBy')
    .populate('comments')
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

function create(req, res) {
    Post.create(req.body)
    .then(post => res.json(post))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Post.findByIdAndDelete(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.json(err))
}