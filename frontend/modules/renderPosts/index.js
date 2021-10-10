import Html from '../html';

const txt = '';
const keyPath = ['desenvolvimento', 'artigo-infinity', 'dia-a-dia', 'mundo-geek'];

function createCard(post) {
	const col = Html.Node('div', [{attr: 'class', val: 'col-sm-4 col-card'}]);
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
	return col;
}

function funErr(main) {
	main.querySelector('h3').innerText = 'Aconteceu algum erro.';
	main.appendChild(Html.Node('a', [{attr: 'class', val: 'nav-link'}, {attr: 'href', val: '/'}]));
	main.querySelector('a').innerText = 'Retornar'
}

function renderPosts({ posts, main }) {
	if(!posts || posts.length < 1) return funErr(main);
	const cardDeck = Html.Node('div', [{attr: 'class', val: 'card-group row'}]);
	for(let post of posts) cardDeck.appendChild(createCard(post));

	main.innerHTML = txt;
	main.appendChild(Html.Node('section', [{attr: 'class', val: 'container'}]));
	main.querySelector('section').appendChild(cardDeck);
}

export default function funRenderPosts({ userID, socket }) {
	const main = document.querySelector('#posts-category');
	const path = window.location.pathname.split('/posts=')[1];
	socket.on('post find by category', ({ posts, id }) => {
		if(id !== userID) return console.log('Socket error');
		renderPosts({ main, posts })
	});
	for (let key of keyPath) {
		if(key === path) socket.emit('search by category', { key, userID });
	}
}