const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const LoginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const LoginModel = mongoose.model('Login', LoginSchema);

module.exports = class Login {
	constructor(body) {
		this.body = body;
		this.errors = [];
		this.user = null;
	}

	async login() {
        this.valid();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email, name: this.body.name });
        if(!this.user) return this.errors.push('Usuário ou senha incorretos.');
        
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Usuário ou senha incorretos.');
            this.user = null;
            return;
        }
    }

    async signUp() {
        this.valid();
        if(this.errors.length > 0) return;
        await this.userExists();
        if(this.errors.length > 0) return;
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        
        this.user = await LoginModel.create(this.body);
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if(this.user) this.errors.push('E-mail já cadastrado em nosso banco de dados.');
    }

    valid() {
        this.cleanUp();

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(this.body.password.length < 8 || this.body.password.length > 20) {
            this.errors.push('A senha precisa ter entre 8 e 20 caracteres.');
        }
    }

    cleanUp() {
        for(let key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
            name: this.body.name
        };
    }
};
