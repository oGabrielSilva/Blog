const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    statistics: { type: Number, default: 1 },
    
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

    async edition() {
        this.valid();
        if(this.body._id) {
            this.article = await PostModel.findByIdAndUpdate(this.body._id, this.body, function(err, docs) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('updated: ', docs);
                }
            });
            return;
        };
        if(!this.article) return this.errors.push('Post não encontrado');
    }

    async articleExist() {
        this.article = await PostModel.findOne({ title: this.body.title });
        if(this.article) this.errors.push('Artigo de mesmo título já existe');
    }

    valid() {
        for(let key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }

    static async Search(limit) {
        limit = limit ? limit : 7;
        const articles = await PostModel.find().sort({ '_id': -1 }).limit(limit); //Funciona, não mexer...
        if(!articles) return null;
        return articles;
    }

    static async SearchById(id) {
        try {
            const article = await PostModel.findById(id);
            return article;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    static async SearchByIdAndDelete(id) {
        try {
            const article = await PostModel.findByIdAndDelete(id, function(err, docs) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Deleted', docs._id);
                }
            });
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    static async SearchByRegex(regex) {
        try {
            const rgx = new RegExp(regex, 'i');
            const article = await PostModel.find({ "title": rgx }).limit(6);
            return article;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    static async SearchByCategory(category) {
        try {
            const articles = await PostModel.find({ "markdown": category }).limit(25);
            return articles;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    static async UpdateSOC(id) {
        try {
            if(id) {
                const statistics = await PostModel.findById(id);
                const update = statistics.statistics + 1;
                const article = await PostModel.findByIdAndUpdate(id, { "statistics": update });
                return article ? true : null;
            };
        } catch (e) {
            console.log('Error', e);
            return;
        }
    }
};
