const Article = require('../../models/Article');

exports.index = (req, res) => {
	if(!req.session.user) return res.redirect('/');
	return res.render('article-render');
};

exports.render = async (req, res) => {
	try {
        const article = new Article(req.body);
        await article.create();
        if(article.errors.length > 0) {
            req.flash('errors', article.errors);
            req.session.save(function() {
                return res.redirect('/staff');
            })
            return;
        }

        req.flash('success', 'Post enviado aos servidores');
        req.session.save(function() {
            return res.redirect('/staff');
        })
        return;
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
        return res.redirect('/');
    };
};

exports.renderEdition = async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.edition();
        if(article.errors.length > 0) {
            req.flash('errors', article.errors);
            req.session.save(function() {
                return res.redirect('/staff');
            })
            return;
        }

        req.flash('success', 'Post enviado aos servidores');
        req.session.save(function() {
            return res.redirect('/staff');
        })
        return;
    } catch (e) {
        console.log(e);
        req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
        return res.redirect('/');
    };
};
