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
const Article = require('./src/models/Article');

mongoose.connect(process.env.CONNECTSTRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false }).then(() => {
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
        "img-src": ["'self'", "i.pinimg.com/"],
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
    socket.on('req-articles', () => Article.Search().then(e => socket.emit('re-articles', e)));
    socket.on('search', id => Article.SearchArticleById(id).then(e => socket.emit('re-article-by-id', e)));
});

app.on('connect', () => {
    server.listen(port, () => console.log(`\nServer on port ${port}. http://127.0.0.1:${port}\n`));
});