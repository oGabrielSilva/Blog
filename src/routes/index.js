const express = require('express');
const route = express.Router();
const home = require('../controllers/home');
const staff = require('../controllers/staff');
const article = require('../controllers/article');
const post = require('../controllers/post');
const email = require('../controllers/email');
const feedback = require('../controllers/feedback');

const { loginRequired } = require('../middleware/');

route.get('/', home.index);		//rota da home

//Rotas da administração
route.get('/staff', staff.index);
route.post('/staff/login', staff.login);
route.post('/staff-new-user', loginRequired, staff.signUp);
route.get('/staff/out', staff.out);
route.get('/system', loginRequired, staff.system);

//Rotas da administração de artigos 
route.get('/system.article', loginRequired, article.index);
route.post('/system.article', loginRequired, article.render);
route.get('/system.edition=:id', loginRequired, staff.edition);
route.post('/system.article.edition', loginRequired, article.renderEdition);

//Rota do Post
route.get('/post=:id', post.index);
//Rota dos Posts
route.get('/posts=:id', post.posts);
route.post('/search', post.search);

//Rota de emails
route.get('/email', loginRequired, email.index);
route.post('/postmail', loginRequired, email.send);

route.get('/feedback', feedback.index);
route.post('/postmail.feedback', feedback.sender);

module.exports = route;
