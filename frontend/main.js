import funReadMore from './modules/post';
import { funHomeHeader, funSetFeatured } from './modules/homeHeader';
import funStaff from './modules/staff';
import funRenderArticle from './modules/renderArticle';

const socket = io();
const homeHeader = document.querySelector('#home-header');
const form = document.querySelector('form');
const post = document.querySelector('#_id');

if(homeHeader) { 
	socket.emit('req-articles');
	socket.on('re-articles', elms => {
		const elmts = [];
		elms.forEach(elm => {
			const { title, description, primary, createdAt, _id  } = elm;
			elmts.push({ title, description, primary, createdAt, _id });
		});

		funHomeHeader(elmts, homeHeader);
	});
};

if(form && !(form.getAttribute('id') === 'render-article')) funStaff();
else if(form && form.getAttribute('id') === 'render-article') funRenderArticle();
if(post && post.value === window.location.pathname.split('/')[1]) funReadMore(socket);
