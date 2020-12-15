const Thread = require('../models/thread')

module.exports = {
    getThreads,
    getThreadDetails,
    create,
    update,
    deleteOne,
    addReply,
}

function getThreads(req, res) {
    Thread.find({})
    .then(threads => res.json(threads))
    .catch(err => res.json(err))
}

function getThreadDetails(req, res) {
    Thread.findById(req.params.id)
    .then(thread => res.json(thread))
    .catch(err => res.json(err))
}

function create(req, res) {
    Thread.create(req.body)
    .then(thread => res.json(thread))
    .catch(err => res.json(err))
}

function update(req, res) {
    Thread.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(thread => res.json(thread))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Thread.findByIdAndDelete(req.params.id)
    .then(thread => res.json(thread))
    .catch(err => res.json(err))
}

function addReply(req, res) {
    const thread = Thread.findById(req.params.id)
    thread.replies.push(req.body)
    Thread.findByIdAndUpdate(req.params.id, thread)
    .then(thread => res.json(thread))
    .catch(err => res.json(err))
}