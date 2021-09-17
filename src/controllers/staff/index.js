const Login = require('../../models/Login');

exports.index = (req, res) => res.render('staff');

exports.system = (req, res) => {
    if(!req.session.user) return res.redirect('/');
    return res.render('system');
}

exports.login = async (req, res) => {
	try {
        const login = new Login(req.body);
        await login.login();
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('/staff');
            });
            return;
        }
        req.flash('success', 'Login realizado com sucesso.');
        req.session.user = login.user;
        req.session.save(function() {
            return res.redirect('/system');
        })
        return;
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
        return res.redirect('/');
    }
};

exports.signUp = async (req, res) => {
	try {
        const login = new Login(req.body);
        await login.signUp();
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('/staff');
            })
            return;
        }

        req.flash('success', 'Sua conta foi criada com sucesso.');
        req.session.save(function() {
            return res.redirect('/staff');
        })
        return;
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
        return res.redirect('/');
    };
}

exports.out = (req, res) => {
    req.session.destroy();
    return res.redirect('/staff');
}
