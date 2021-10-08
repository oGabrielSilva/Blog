import Html from '../html';

const txt = '';
const keyPath = ['desenvolvimento', 'artigo-infinity', 'dia-a-dia', 'mundo-geek'];

function renderPosts({ posts, main }) {
	const cardDeck = Html.Node('div', [{attr: 'class', val: 'card-group row'}]);
	for(let post of posts) {
		const col = Html.Node('div', [{attr: 'class', val: 'col-sm-4'}]);
		const card = Html.Node('div', [{attr: 'class', val: 'card'}]);
		const img = Html.Node('img', [{attr: 'class', val: 'card-img-top'}, {attr: 'src', val: post.primary}]);
		card.appendChild(img);
		const cardBody = Html.Node('div', [{attr: 'class', val: 'card-body'}]);
		const h5 = Html.Node('h5', [{attr: 'class', val: 'card-title'}]);
		h5.innerText = post.title;
		cardBody.appendChild(h5);
		const p = Html.Node('p', [{attr: 'class', val: 'card-text'}]);
		p.innerText = post.description;
		cardBody.appendChild(p);
		const btn = Html.Node('a', [{attr: 'class', val: 'btn btn-primary mt-2 mb-2'}, {attr: 'href', val: `/post=${post._id}`}]);
		btn.innerText = 'Acessar post';
		cardBody.appendChild(btn);
		const small = Html.Node('p', [{attr: 'class', val: 'card-text'}]);
		const smallText = Html.Node('small', [{attr: 'class', val: 'text-muted'}]);
		const date = new Date(post.createdAt);
		smallText.innerText = `Last update ${moment(date, 'YYYYMMDD').fromNow()}`
		small.appendChild(smallText);
		cardBody.appendChild(small);
		card.appendChild(cardBody);
		col.appendChild(card);
		cardDeck.appendChild(col);
	}

	main.innerHTML = txt;
	main.appendChild(Html.Node('section', [{attr: 'class', val: 'container'}]));
	main.querySelector('section').appendChild(cardDeck);
}

export default function funRenderPosts(socket) {
	const main = document.querySelector('#posts-category');
	const path = window.location.pathname.split('/posts=')[1];
	socket.on('post find by category', posts => renderPosts({ main, posts }));
	for (let key of keyPath) {
		if(key === path) socket.emit('search by category', key);
	}
}