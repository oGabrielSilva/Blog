import Article from './Article';

const main = document.querySelector('#render-article');
let index = 0;
let copy = `
<div class="row mt-5">
	<div class="col-md-6">
		<div class="form-group">
			<input autocomplete="off" aria-describedby="Título do Parágrafo 2" 
			required="" name="h2" id="h2" type="text" class="form-control mb-2" 
			placeholder="Desenvolvimento - Subtítulo" maxlength="70">
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-group">
			<input autocomplete="off" aria-describedby="Link para imagem" name="img" 
			type="text" class="form-control mb-2" placeholder="Link para imagem" id="img" 
			maxlength="100">
		</div>
	</div>
</div>
<div class="form-floating">
	<textarea minlength="400" required="" style="height: 300px;" class="form-control" placeholder="Leave a comment here" id="development" name="development"></textarea>
	<label for="development">Desenvolvimento</label>
</div>`;

function valid() {
	const texts = main.querySelector('#contents').querySelectorAll('textarea');
	const inputs = main.querySelector('#contents').querySelectorAll('input');
	const article = new Article([...inputs].concat([...texts]));
	article.gap();

	if(article.errors.length > 0) {
		main.querySelector('#danger-help').innerText = article.errors.join('; ');
		setTimeout(() => main.querySelector('#add').classList.remove('bg-danger'), 5000);
		main.querySelector('#add').classList.add('bg-danger');
		return false;
	} else {
		main.querySelector('#add').classList.remove('bg-danger');
		main.querySelector('#danger-help').innerText = article.errors.join('; ');
		main.querySelector('#add').classList.add('bg-success');
		return true;
	}
}

function cleanUp(inp) {
	for(let i in inp) {
		if(inp[i].value === '') return inp[i].focus();
		if((typeof inp[i].value !== 'string') || (inp[i].value.length > 100)) {
			inp[i].focus();
			inp[i] = null;
			continue;
		};
		if(inp[i].getAttribute('name') === 'primary') {
			if(!inp[i].value.startsWith('https://')) {
				inp[i].focus();
				inp[i] = null;
			} 
		};
	}
	return inp;
}

function validFun(target) {
	const inputs = cleanUp([...target.querySelectorAll('input')]);
	for(let input of inputs) {
		if(input === null) return null;
	}
	return inputs;
}

const fun = e => {
	e.preventDefault();
	const val = valid();
	const preventProcess = validFun(e.target);
	if(val && preventProcess) {
		const texts = main.querySelector('#contents').querySelectorAll('textarea');
		const inputs = main.querySelector('#contents').querySelectorAll('input');
		const article = new Article([...inputs].concat([...texts]));
		article.replacing();
		return e.target.submit();
	};
	 
	main.querySelector('button').classList.add('bg-danger')
	setTimeout(() => main.querySelector('button').classList.remove('bg-danger'), 5000);
}

export default function funRenderArticle() {
	main.querySelector('#add').addEventListener('click', valid);
	main.querySelector('#plus').addEventListener('click', e => {
		e.preventDefault();
		if(index === 5) return main.querySelector('#plus').setAttribute('class', 'nav-link disabled');
		if(!confirm('Será criado um novo parágrafo. Clique em "OK" para confirmar.')) return;
		index += 1;
		const container = main.querySelector('#paragraph');
		const headers = document.createElement('div');
		headers.innerHTML += copy;
		headers.innerHTML = headers.innerHTML.replace(/development/g, 'development' + String(index));
		headers.innerHTML = headers.innerHTML.replace(/h2/g, 'h2' + String(index));
		headers.innerHTML = headers.innerHTML.replace(/img/g, 'img' + String(index));
		container.innerHTML += headers.innerHTML;
		setTimeout(() => container.querySelector(`#h2${String(index)}`).focus(), 300);
	});

	main.addEventListener('submit', fun);
};
