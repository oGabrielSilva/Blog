const Article = require('../../models/Article');

exports.index = async (req, res) => {
	try {
		const article = await Article.SearchById(req.params.id);
		if(!article) {
			req.flash('errors', ['Aconteceu algo de errado? Nos contate. :3']);
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
