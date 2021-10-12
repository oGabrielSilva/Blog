const nodemailer = require('nodemailer');
const user = process.env.OUTLOOKUSER;
const pass = process.env.OUTLOOKPASSWORD;

exports.index = (req, res) => res.render('email', { feedback: true });

exports.sender = (req, res) => {
	try {
		const transport = nodemailer.createTransport({
			host: "smtp.office365.com",
			port: 587,
			secure: false, 
			auth: { user, pass },
		});

		const from = `Geek Infinity <${user}>`;
		let { to, subject, html, name } = req.body;
		subject = `Recebemos sua mensagem: ${subject}. Verifique sua mensagem.`;

		const message = { from, to, subject, html };
		console.log(message);
		transport.sendMail(message).then(val => {
			req.flash('success', 'Recebemos o seu feedback. :3');
			req.session.save(function() {
				return res.redirect('/');
			});
			return;
		}).catch(err => {
			console.log(err);
			req.flash('errors', ['Seu feedback não pôde ser enviado']);
			req.session.save(function() {
				return res.render('index');
			});
			return;
		});
	} catch(e) {
		console.log(e);
	};
};
