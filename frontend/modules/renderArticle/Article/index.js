export default class Article {
	constructor(body) {
		this.body = body;
		this.errors = [];
		this.content = null;
	}

	gap() {
		for(let i in this.body) {
			if(this.body[i].nodeName === 'INPUT') this.cleanInp(i);
			else if(this.body[i].nodeName === 'TEXTAREA') this.cleanTex(i);
		};

		if(this.errors.length > 0) {
			this.body = null;
			return;
		}

		if(this.body && this.errors.length < 1) return this.content = true;
	}

	replacing() {
		for(let i in this.body) {
			if(this.body[i].nodeName === 'TEXTAREA') {
				this.body[i].value = this.body[i].value.replace(/script/ig, 
					'<span style="background: #000; color: #500">censored</span>');

				let urls = this.body[i].value.match(/(https?:\/\/[^\s]+)/g);
				if(!urls) return;
				urls = urls.filter((elm, i) => urls.indexOf(elm) === i);
				for (let url in urls) {
					const rgx = new RegExp(urls[url], 'g');
					this.body[i].value = this.body[i].value.replace(rgx, `<a target="_blank" href="${urls[url]}">${urls[url]}</a>`);
				};
			}
		};
	}

	cleanInp(i) {
		if(this.body[i].value.length > 100) this.errors.push(`${this.body[i].getAttribute('name')} está irregular`);
		if(typeof this.body[i].value !== 'string') this.errors.push('falha no sistema, input irregular');
		if(this.body[i].value.length < 5) this.errors.push(`input ${this.body[i].getAttribute('name')} está incompleto/pequeno`);
	}

	cleanTex(i) {
		if(this.body[i].value.length < 400 && this.body[i].getAttribute('id') !== 'ending') 
			this.errors.push(`${this.body[i].getAttribute('name')} está incompleto`);
		if(typeof this.body[i].value !== 'string') 
			this.errors.push('falha no sistema, textarea irregular');
		if(this.body[i].getAttribute('id') === 'ending' && 
			this.body[i].value.length < 100) this.errors.push('ending pequena demais');
	}
};
