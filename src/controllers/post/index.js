const Article = require('../../models/Article');
const Login = require('../../models/Login');

exports.index = async (req, res) => {
	try {
		const { id } = req.params;
		const article = await Article.SearchById(id);
		const user = await Login.SearchByName(article.author);
		if(!article) {
			req.flash('errors', ['Aconteceu algo de errado? Nos contate. :3']);
			req.session.save(function() {
				return res.render('index');
			});
			return;
		}
		const share = true;
		res.render('post', { article, user, share });
		return;
	} catch (e) {
		console.log(e);
		req.flash('errors', ['Infelizmente tivemos algum problema... :(']);
		return res.redirect('/');
	}
};

exports.posts = (req, res) => res.render('posts-category');
