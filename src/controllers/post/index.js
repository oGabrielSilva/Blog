const Article = require('../../models/Article');

exports.index = async (req, res) => {
	try {
		const { id } = req.params;
		const article = await Article.SearchById(id);
		if(!article) {
			req.flash('errors', ['Aconteceu algo de errado? Nos contate. :3']);
			req.session.save(function() {
				return res.render('index');
			});
			return;
		}
		res.render('post', { article });
		return;
	} catch (e) {
		console.log(e);
		req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
		return res.redirect('/');
	}
};
