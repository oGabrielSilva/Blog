require('dotenv').config();
const nodemailer = require('nodemailer');
const user = process.env.OUTLOOKUSER;
const pass = process.env.OUTLOOKPASSWORD;

exports.index = (req, res) => res.render('email');

exports.send = (req, res) => {
	try {
		const transport = nodemailer.createTransport({
			host: "smtp.office365.com",
			port: 587,
			secure: false, 
			auth: { user, pass, },
		});

		const from = `Geek Infinity <${user}>`;
		let { to, subject, html, _name, _id, _img, _twitter, _github } = req.body;

		const message = { from, to, subject, html };
		transport.sendMail(message).then(val => {
			return res.json({
				err: false,
				message: 'Seu e-mail foi enviado com sucesso'
			});
		}).catch(err => {
			console.log(err);
			return res.status(400).json({
				err: true,
				message: 'Email bloqueado, verifique o log do servidor.'
			});
		});
	} catch(e) {
		console.log(e);
	};
};

exports.register = (req, res) => res.json({ hello: 'world' });
