const Article = require('../../models/Article');

exports.index = async (req, res) => {
	try {
		const article = await Article.SearchArticleById(req.params.id);
		if(!article) {
			req.flash('errors', ['Ops, tivemos algum erro. Sentimos muito :c']);
			req.session.save(function() {
				return res.render('index');
			});
			return;
		}
		return res.render('post', { article });
	} catch (e) {
		console.log(e);
		req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
		return res.redirect('/');
	}
};
