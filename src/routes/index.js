const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/verify');
// Rutas indexadas
const homeRoutes = require('./home');
const signUpRoutes = require('./signup');
const userRoutes = require('./user');

router.use(homeRoutes);
router.use('/signup', signUpRoutes);
router.use('/users', AuthMiddleware, userRoutes);

module.exports =  router;
/* const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const PostController = require('../controllers/posts');
const verify = require('../middlewares/verify');
const { UserValidator, postCreateValidator } = require('../validators');

// user routes

router.get('/users', verify, UserController.fetch);
router.get('/users/:id', verify, UserValidator.findOne, UserController.retrieve);
router.post('/user/login', UserValidator.login, UserController.login);
router.post('/users', UserValidator.create, UserController.add);
router.put('/users/:id', verify, UserValidator.create, UserController.modify);
router.delete('/users/:id', verify, UserController.eliminate);
router.get('users/:id/posts', verify, UserController.populatedUser);

module.exports = router;

// posts routes

router.get('/posts/users', verify, PostController.populatedPosts);
router.get('/posts', verify, PostController.fetch);
router.get('/posts/:id', verify, PostController.retrieve);
router.post('/posts', verify, postCreateValidator.create, PostController.add);
router.put('/posts/:id', verify, PostController.modify);
router.delete('/posts/:id', verify, PostController.eliminate);

module.exports = router; */