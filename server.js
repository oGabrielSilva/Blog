// require('dotenv').config();
const express = require('express');
const path = require('path');
// const helmet = require('helmet');
// const csrf = require('csurf');
const port = 3000;
const app = express();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.CONNECTSTRING, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false }).then(() => {
//         app.emit('connect')
//     }).catch(e => console.log('Mongoose connect error'));

// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const flash = require('connect-flash');
const routes = require('./src/routes/');

// const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middleware/');

// app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public/')));
// const sessionConfig = session({
//     secret: 'Session',
//     store: MongoStore.create({ mongoUrl: process.env.CONNECTSTRING }),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//         httpOnly: true
//     }
// });
// app.use(sessionConfig);
// app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// app.use(csrf());
// app.use(middlewareGlobal);
// app.use(csrfMiddleware);
// app.use(checkCsrfError);
app.use(routes);
app.listen(port, () => console.log(`\nServer on port ${port}. http://127.0.0.1:${port}\n`));

// app.on('connect', () => {
//     app.listen(port, () => console.log(`\nServer on port ${port}. http://127.0.0.1:${port}\n`));
// });