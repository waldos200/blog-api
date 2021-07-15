// const { findAll, findOne, create, update, delete:remove } = require('../models/posts');
const Post = require('../models/posts');

module.exports = {
    fetch: (req, res) => {
        const postObj = new Post();
        if (req.query.category) return postObj.searchByCategory(req.query.category).then(result => res.status(200).json(result))
        if (req.query.category) return postObj.searchInBody(req.query.search).then(result => res.status(200).json(result))
        postObj.findAll().then( (posts) => res.status(200).json(posts) )
    },

    retrieve: (req, res) => {
        const postObj = new Post();
        postObj.findOne(req.params.id).then( (post) => {
            res.status(200).json(post)
        } ).catch( (error) => {
            res.status(400).json(error)
        } )
    },

    add: (req, res) => {
        const postObj = new Post();
        postObj.create(req.body).then( (post) => {
            res.status(201).json(post)
        } ).catch( (error)=> {
            res.status(400).json(error)
        } )
    },

    modify: (req, res) => {
        const postObj = new Post();
        postObj.update(req.params.id, req.body).then( (post) => {
            res.status(200).json(post)
        } ).catch ( (error) => {
            res.status(400).json(error)
        } )
    }, 

    eliminate: (req, res) => {
        const postObj = new Post();
        postObj.delete(req.params.id).then( () => {
            res.status(204).send()
        } ).catch( () => {
            res.status(400).json(error)
        } )
    },

    populatedPosts: (req, res) => {
        const postObj = new Post();
        postObj.populateUser().then( (posts) => {
            res.status(200).json(posts)
        } )
    }
};