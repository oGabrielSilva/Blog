import funReadMore from './modules/post';
import funHomeHeader from './modules/homeHeader';
import funStaff, { funEditionPost } from './modules/staff';
import funRenderArticle from './modules/renderArticle';
import funRenderPosts from './modules/renderPosts';
import { funRenderEmail } from './modules/email';

const socket = io();

const homeHeader = document.querySelector('#home-header');
const form = document.querySelector('form');
const post = document.querySelector('#_id');
const edition = document.querySelector('#system-edition');
const email = document.querySelector('#system-email-render')
const postsCategory = document.querySelector('#posts-category')

if(post && post.value === window.location.pathname.split('=')[1]) funReadMore(socket);
if(edition) funEditionPost(edition, socket);
if(email) funRenderEmail();
if(postsCategory) funRenderPosts(socket);

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
if(form && !(form.getAttribute('id') === 'render-article')) {
	funStaff();
} else if(form && form.getAttribute('id') === 'render-article') {
	funRenderArticle();
}
