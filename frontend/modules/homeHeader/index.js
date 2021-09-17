export function funHomeHeader(elms, homeHeader) {
	const row = document.querySelector('.row');
	const featured = document.querySelector('#featured');
	const lastPost = [];

	elms.forEach(elm => {
		if(lastPost.length < 1) return lastPost.push(elm);
		if(elm.createdAt < lastPost[0]) return lastPost[0] = elm;
	});
	
	const sync = setLastPost(row, lastPost);
	if(sync === true) {
		const childrens = [...row.children[1].querySelectorAll('.col-sm-6')]
			.concat([...featured.querySelectorAll('.card')]);

		let index = 0;
		childrens.forEach(elm => {
			if(index >= elms.length) index = 0;
			elm.querySelector('.card-title').innerText = elms[index].title;
			elm.querySelector('.card-text').innerText = elms[index].description;
			elm.querySelector('a').setAttribute('href', `/post/${elms[index]._id}`);
			index += 1;
		});
	};
};

export function funSetFeatured(elms) {
	const featured = document.querySelector('#featured');
	if(!featured) return false;
}

function setLastPost(row, lastPost) {
	row.children[0].querySelector('img').setAttribute('src', lastPost[0].primary)
	row.children[0].querySelector('.card-title').innerText = lastPost[0].title;
	row.children[0].querySelector('.card-text').innerText = lastPost[0].description;
	row.children[0].querySelector('a').setAttribute('href', `/post/${lastPost[0]._id}`);
	return true;
};
