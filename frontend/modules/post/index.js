const html = `
	<section>
		<img src="#" class="mx-auto w-75 d-block mb-5 mt-5">
		<p class="h2 mb-4 text-break">%</p>
		<p>@</p>
	</section>`;

function setReadMore(obj, pathname) {
	const main = document.querySelector('main');
	if(pathname !== obj._id) return;
	let section = '';

	const { h21, h22, h23, h24, h25, h3 } = obj;
	const { img1, img2, img3, img4, img5 } = obj;
	const { 
		development1, development2, development3,
		development4, development5, ending } = obj;

	const body = [
		[h21, img1, development1], [h22, img2, development2], 
		[h23, img3, development3], [h24, img4, development4], 
		[h25, img5, development5]
	];

	for (let elm of body) {
		if(!elm[0] && !elm[2]) continue;
		let path = html.replace(/\#/g, elm[1]); 
		path = path.replace(/\%/g, elm[0]); 
		path = path.replace(/\@/g, elm[2]); 
		section += path;
	}
	
	let path = html.replace(/\%/g, h3);
	path = path.replace(/\@/g, ending);
	path = path.replace('<img src="#" class="mx-auto w-75 d-block mb-5 mt-5">', '');
	section += path;
	
	main.querySelector('#read-more').addEventListener('click', e => {
		e.preventDefault();
		e.target.parentElement.parentElement.remove();
		main.innerHTML += section;
	});
}

export default function funReadMore(socket) {
	const pathname = window.location.pathname.split('=')[1];
	socket.emit('search', pathname);
	socket.on('re-article-by-id', obj => setReadMore(obj, pathname));
};
