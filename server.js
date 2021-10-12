require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { version } = require('./package.json');
const Article = require('./src/models/Article');

mongoose.connect(process.env.CONNECTSTRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
.then(() => {
        app.emit('connect')
}).catch(e => console.log('Mongoose connect error'));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./src/routes/');

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middleware/');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "i.pinimg.com/", "avatars.githubusercontent.com/"],
      },
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public/')));
const sessionConfig = session({
    secret: 'Session',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionConfig);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(checkCsrfError);
app.use(routes);

io.on('connection', socket => {
    socket.on('find all posts', id => {
        Article.FindAllPosts().then(posts => {
            const span = { id, posts }
            socket.emit('return all posts', span);
        }).catch(e => console.log(e));
    });

    socket.on('req-articles', elm => {
        if(!elm.userID) return console.log('Socket error: req-articles');
        Article.Search(elm.num).then(e => socket.emit('re-articles', { e, userID: elm.userID })).catch(err => { 
            console.log(err);
        });
    });
    
    socket.on('search', ({ id, userID }) => {
        if(!userID) return console.log('Socket error: search');
        Article.SearchById(id).then(e => socket.emit('re-article-by-id', { e, userID })).catch(err => { 
            console.log(err);
        });
    });

    socket.on('delete a post', ({ id, userID }) => {
        if(!userID) return console.log('Socket error: delete a post');
        Article.SearchByIdAndDelete(id)
        .then(article => socket.emit('post deleted', { article, userID }))
        .catch(e => console.log('Erro ao buscar artigo para deletar.', e));
    });

    socket.on('search post by id or title', value => {
        if(!value.userID) return console.log('Socket error: search post by id or title');
        const user = value.userID;
        const id = value.id !== null && value.id.length === 24 ? value.id : null;
        const title = value.title !== null && value.title.length < 71 ? value.title : null;
        if(id === null && title === null) return socket.emit('error', user);
        if(id) return Article.SearchById(id).then(at => socket.emit('found article', { at, user })).catch(err => { 
            console.log(err);
        });
        else if(title) return Article.SearchByRegex(title).then(at => socket.emit('found article', { at, user })).catch(err => { 
            console.log(err);
        });
        return;
    });

    socket.on('search by category', ({ key, userID }) => {
        if(!userID) return console.log('Socket error: search by category');
        Article.SearchByCategory(key).then(posts => socket.emit('post find by category', { posts, id: userID })).catch(err => { 
            console.log(err);
        });
    });

    socket.on('statistics', ({ pathname, userID }) => {
        if(!userID) return console.log('Socket error: statistics');
        Article.UpdateSOC(pathname).then(tOf => {}).
        catch(e => console.log(e));
    });

    socket.on('require version', id => {
        if(!id) return console.log('Socket error');
        socket.emit('require version completed', { id, version });
    });
});

app.on('connect', () => {
    server.listen(port, () => console.log(`\nServer on port ${port}. http://127.0.0.1:${port}\n`));
});
