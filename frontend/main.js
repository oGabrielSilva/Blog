import funHomeHeader from './modules/homeHeader';
import funStaff, { funEditionPost } from './modules/staff';
import funRenderArticle from './modules/renderArticle';
import funRenderPosts, { funRenderAllPosts } from './modules/renderPosts';
import funReadMore from './modules/post';
import { funRenderEmail } from './modules/email';

const socket = io();
const userID = generateID();

const homeHeader = document.querySelector('#home-header');
const form = document.querySelector('form');
const post = document.querySelector('#_id');
const edition = document.querySelector('#system-edition');
const email = document.querySelector('#system-email-render');
const postsCategory = document.querySelector('#posts-category');
const footer = document.querySelector('#footer');

if(post && post.value === window.location.pathname.split('=')[1]) funReadMore({ userID, socket });
if(edition) funEditionPost(edition, { socket, userID });
if(email) funRenderEmail();
if(postsCategory) funRenderPosts({ socket, userID });

if(homeHeader) { 
	socket.emit('req-articles', { userID, num: null });
	socket.on('re-articles', elms => {
		if(elms.userID !== userID) return console.log('Socket error');
		const elmts = [];
		elms.e.forEach(elm => {
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

function generateID() {
	const id = '_' + Math.random().toString(36).substr(2, 9) + Math.random().toFixed(5);
	return `${id.replace('.', '&')}`;
}
