exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        console.log('erro no csrf');
        req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
        return res.redirect('/');
    };
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        console.log('Login Required');
        req.session.save(() => res.redirect('/'));
        return;
    }
    next();
}

