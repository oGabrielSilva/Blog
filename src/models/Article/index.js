const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    page: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    primary: { type: String, required: true },
    description: { type: String, required: true },
    markdown: { type: String, required: true },
    h1: { type: String, required: true },
    introduction: { type: String, required: true },
    h2: { type: String, required: true },
    img: { type: String, required: true },
    development: { type: String, required: true },
    h3: { type: String, required: true },
    ending: { type: String, required: true },

    h21: { type: String, required: false },
    h23: { type: String, required: false },
    h24: { type: String, required: false },
    h25: { type: String, required: false },
    img1: { type: String, required: false },
    img2: { type: String, required: false },
    img3: { type: String, required: false },
    img4: { type: String, required: false },
    img5: { type: String, required: false },
    development1: { type: String, required: false },
    development2: { type: String, required: false },
    development3: { type: String, required: false },
    development4: { type: String, required: false },
    development5: { type: String, required: false },
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = class Article {
	constructor(body) {
        this.body = body;
        this.errors = [];
        this.article = null;
    }

    async create() {
        this.valid();
        await this.articleExist();
        if(this.errors.length > 0) return;
        this.article = await PostModel.create(this.body);
    }

    static async Search(limit = 7) {
        const articles = await PostModel.find().sort({ '_id': -1 }).limit(limit); //Funciona, não mexer...
        if(!articles) return null;
        return articles;
    }

    async articleExist() {
        this.article = await PostModel.findOne({ title: this.body.title });
        if(this.article) this.errors.push('Artigo de mesmo título já existe');
    }

    static async SearchArticleById(id) {
        try {
            const article = await PostModel.findById(id);
            return article;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    valid() {
        for(let key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }
};
