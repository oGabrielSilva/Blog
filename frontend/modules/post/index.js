import Html from '../html';

const html = ({ src, text, title }) => {
	if(!src && !text && !title) return null;

	const section = Html.Node('section');
	
	const img = Html.Node('img', [
		{attr: 'src', val: src}, 
		{attr: 'class', val: 'mx-auto w-75 d-block mb-5 mt-5'}
	]);

	const h2 = Html.Node('p', [{attr: 'class', val: 'h2 mb-4 text-break'}]);
	h2.innerText = String(title);

	const p = Html.Node('p');
	p.innerText = String(text);

	section.appendChild(h2);
	section.appendChild(img);
	section.appendChild(p);
	return section;
}

function setReadMore(obj, pathname) {
	const main = document.querySelector('main');
	if(pathname !== obj._id) return;
	const section = Html.Node('div');

	const { h21, h22, h23, h24, h25, h3 } = obj;
	const { img1, img2, img3, img4, img5 } = obj;
	const { development1, development2, development3,
		development4, development5, ending 
	} = obj;

	const body = [
		[h21, img1, development1], [h22, img2, development2], 
		[h23, img3, development3], [h24, img4, development4], 
		[h25, img5, development5]
	];

	for (let elm of body) {
		if(!elm[0] && !elm[2]) continue;
		const path = html({
			title: elm[0],
			src: elm[1],
			text: elm[2]
		});
		section.appendChild(path);
	}
	
	const path = html({
		title: h3,
		text: ending,
		src: window.location.pathname
	});
	
	path.querySelector('img').remove();
	section.appendChild(path);
	
	main.querySelector('#read-more').addEventListener('click', e => {
		e.preventDefault();
		e.target.parentElement.parentElement.remove();
		main.appendChild(section);
	});
}

export default function funReadMore({ socket, userID }) {
	const pathname = window.location.pathname.split('=')[1];
	socket.emit('statistics', { pathname, userID });
	socket.emit('search', { id: pathname, userID });
	socket.on('re-article-by-id', obj => {
		if(userID !== obj.userID) return console.log('Socket error');
		const { e } = obj;
		setReadMore(e, pathname)
	});
};
