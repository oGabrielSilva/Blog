import Article from './Article';
import Html from '../html';

function createParagraph(index) {
	const father = Html.Node('div', [{attr: 'class', val: 'row mt-5'}]);
	const firstCol = Html.Node('div', [{attr: 'class', val: 'col-sm-6'}]);
	const formGroup = Html.Node('div', [{attr: 'class', val: 'form-group'}]);
	formGroup.appendChild(Html.Node('input', [
		{attr: 'autocomplete', val: 'off'}, {attr: 'name', val: `h2${index}`},
		{attr: 'aria-describedby', val: 'Título do Parágrafo'}, {attr: 'required', val: ''},
		{attr: 'id', val: `h2${index}`}, {attr: 'type', val: 'text'}, {attr: 'class', val: 'form-control mb-2'},
		{attr: 'placeholder', val: 'Desenvolvimento - Subtítulo'}, {attr: 'maxlength', val: '70'}
		]));
	firstCol.appendChild(formGroup);
	father.appendChild(firstCol);

	const secondCol = Html.Node('div', [{attr: 'class', val: 'col-sm-6'}]);
	const secondFormGroup = Html.Node('div', [{attr: 'class', val: 'form-group'}]);
	secondFormGroup.appendChild(Html.Node('input', [
		{attr: 'autocomplete', val: 'off'}, {attr: 'name', val: `img${index}`},
		{attr: 'aria-describedby', val: 'Link para imagem'}, {attr: 'required', val: ''},
		{attr: 'id', val: `img${index}`}, {attr: 'type', val: 'text'}, {attr: 'class', val: 'form-control mb-2'},
		{attr: 'placeholder', val: 'Link para imagem'}, {attr: 'maxlength', val: '100'}
		]));
	secondCol.appendChild(secondFormGroup);
	father.appendChild(secondCol);

	const formFloating = Html.Node('div', [{attr: 'class', val: 'form-floating'}]);
	formFloating.appendChild(Html.Node('textarea', [
		{attr: 'minlength', val: '400'}, {attr: 'required', val: ''},
		{attr: 'style', val: 'height: 300px;'}, {attr: 'class', val: 'form-control'},
		{attr: 'placeholder', val: 'Leave a comment here'}, {attr: 'id', val: `development${index}`},
		{attr: 'name', val: `development${index}`},
		]));
	formFloating.appendChild(Html.Node('label', [{attr: 'for', val: `development${index}`}]));
	father.appendChild(formFloating);

	return father;
}

const main = document.querySelector('#render-article');
let index = 0;

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
// let copy = `
// <div class="row mt-5">
// 	<div class="col-md-6">
// 		<div class="form-group">
// 			<input autocomplete="off" aria-describedby="Título do Parágrafo 2" 
// 			required="" name="h2" id="h2" type="text" class="form-control mb-2" 
// 			placeholder="Desenvolvimento - Subtítulo" maxlength="70">
// 		</div>
// 	</div>
// 	<div class="col-md-6">
// 		<div class="form-group">
// 			<input autocomplete="off" aria-describedby="Link para imagem" name="img" 
// 			type="text" class="form-control mb-2" placeholder="Link para imagem" id="img" 
// 			maxlength="100">
// 		</div>
// 	</div>
// </div>
// <div class="form-floating">
// 	<textarea minlength="400" required="" style="height: 300px;" class="form-control" placeholder="Leave a comment here" id="development" name="development"></textarea>
// 	<label for="development">Desenvolvimento</label>
// </div>`;

export default function funRenderArticle() {
	main.querySelector('#add').addEventListener('click', valid);
	main.querySelector('#plus').addEventListener('click', e => {
		e.preventDefault();
		if(!confirm('Será criado um novo parágrafo. Clique em "OK" para confirmar.')) return;
		index += 1;
		const container = main.querySelector('#paragraph');
		const headers = document.createElement('div');
		headers.appendChild(createParagraph(index));
		container.appendChild(headers);
		setTimeout(() => container.querySelector(`#h2${String(index)}`).focus(), 100);
		if(index === 5) return main.querySelector('#plus').setAttribute('class', 'nav-link disabled');
	});

	main.addEventListener('submit', fun);
};
