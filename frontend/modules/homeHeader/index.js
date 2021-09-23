export function funHomeHeader(elms, homeHeader) {
	const row = document.querySelector('#row');
	const featured = document.querySelector('#featured');
	const lastPost = [];

	elms.forEach(elm => {
		if(lastPost.length < 1) lastPost.push(elm);
		if(elm._id > lastPost[0]._id) lastPost[0] = elm;
	});
	
	const sync = setLastPost(row, lastPost);
	if(sync === true) {
		const childrens = [...row.children[1].querySelectorAll('.col-sm-6')]
			.concat([...featured.querySelectorAll('.card')]);

		let index = 0;
		childrens.forEach(elm => {
			if(index >= elms.length) index = 0;
			if(elms[index] === lastPost[0]) index += 1;
			elm.querySelector('.card-title').innerText = elms[index].title;
			elm.querySelector('.card-text').innerText = elms[index].description;
			elm.querySelector('a').setAttribute('href', `/${elms[index]._id}`);
			if(elm.querySelector('small')) {
				const date = new Date(elms[index].createdAt);
				elm.querySelector('small').
					innerText = moment(date, 'YYYYMMDD').fromNow();
			}
			index += 1;
		});
	};
};

function setLastPost(row, lastPost) {
	row.children[0].querySelector('img').setAttribute('src', lastPost[0].primary)
	row.children[0].querySelector('.card-title').innerText = lastPost[0].title;
	row.children[0].querySelector('.card-text').innerText = lastPost[0].description;
	row.children[0].querySelector('a').setAttribute('href', `/${lastPost[0]._id}`);
	return true;
};
