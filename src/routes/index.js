const express = require('express');
const route = express.Router();
const home = require('../controllers/home');
const staff = require('../controllers/staff');
const article = require('../controllers/article');
const post = require('../controllers/post');

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

//Rota do Post
route.get('/post=:id', post.index);

module.exports = route;
