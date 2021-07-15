// const { findAll, findOne, create, update, delete:remove } = require('../models/users');
const User = require('../models/users');
const hashPassword = require('../utils/hashPassword');
const authenticate = require('../utils/authenticate');
const generateJWT = require('../utils/generateJWT');

module.exports = {
    fetch: (req, res) => {
        const userObj = new User();
        userObj.findAll().then( (users) => res.status(200).json(users) )
    },

    login: async (req, res) => {
        try {
            const { userFound } = await authenticate(req.body)
            const token = generateJWT(userFound)
            res.status(200).send({token});
        } catch (error) {
            res.status(400).json(error.message)
        } 
    },

    retrieve: (req, res) => {
        const userObj = new User();
        userObj.findOne(req.params.id).then( (result) => {
            res.status(200).json(result)
        } ).catch( (error) => {
            res.status(400).json(error)
        } )
    },

    add: async (req, res) => {
        req.body.password = await hashPassword(req.body.password);
        const userObj = new User();
        userObj.create(req.body).then( (result) => {
            res.status(201).json(result)
        } ).catch( (error)=> {
            res.status(400).json(error)
        } )
    },

    modify: async (req, res) => {
        req.body.password = await hashPassword(req.body.password);
        const userObj = new User();
        userObj.update(req.params.id, req.body).then( (result) => {
            res.status(200).json(result)
        } ).catch ( (error) => {
            res.status(400).json(error)
        } )
    }, 

    eliminate: (req, res) => {
        const userObj = new User();
        userObj.delete(req.params.id).then( () => {
            res.status(204).send()
        } ).catch( () => {
            res.status(400).json(error)
        } )
    },

    populatedUser: (req, res) => {
        const user = new User();
        user.populatePosts(req.params.id).then( (result) => {
            res.status(200).jso(result)
        } ).catch( (error) => {
            res.status(400).json(error);
        } )
    }
};