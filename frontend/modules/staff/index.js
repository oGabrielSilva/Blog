import Html from '../html';

const fun = e => {
	e.preventDefault();
	const { target } = e;
	const filterInputs = funValidator([...target.querySelectorAll('input')]);
	filterInputs === true ? e.target.submit() : console.log(filterInputs);
	return;
};

function createButtonConfirm(id) {
	const section = Html.Node('section', [
		{attr: 'class', val: 'border rounded shadow-sm p-3 d-block overflow-auto'},
		{attr: 'style', val: `min-height: 40vh; width: 50vw; position: absolute; 
			top: 50%; right: 50%; transform: translate(50%, -50%);`}
	]);
	const firstRow = Html.Node('div', [{attr: 'class', val: 'row'}]);
	const firstCol = Html.Node('div', [{attr: 'class', val: 'col text-center'}]);
	firstCol.appendChild(Html.Node('p', [{attr: 'class', val: 'h5 p-title-1'}]));
	firstCol.appendChild(Html.Node('p', [{attr: 'class', val: 'fw-light p-text-1'}]));
	firstCol.querySelector('.p-title-1').innerText = 'Deletar post';
	firstCol.querySelector('.p-text-1').innerText = `Você realmente deseja deletar o post ${id}? 
		Após deletar, todos os dados serão perdidos. Clique para confirmar.`;
	firstRow.appendChild(firstCol);
	
	const secondRow = Html.Node('div', [{attr: 'class', val: 'row'}]);
}

function funDel(e, id, socket) {
	e.preventDefault();
	socket.emit('delete post', { id });
}

function cleanUp(inputs) {
	let items = inputs;
	const errors = [];
	for(let item in items) {
		if((items[item].value.length <= 0) 
			|| (typeof items[item].value !== 'string')) 
		{
			errors.push(`Algum item foi mal digitado`);
			items = null;
			break;
		}
	}
	return { items, errors };
}

function funValidator(inputs) {
	const activeIp = cleanUp(inputs);
	if(activeIp.items && activeIp.errors.length === 0) return true;
	return activeIp.errors;
}

export default function funStaff() {
	const forms = document.querySelectorAll('form');
	for(let form of forms) {
		form.addEventListener('submit', fun);
	};
};

//---------------------------------------------------------------
function funEditPanelHtml() {
	const editPanelHtml = Html.Node('section', [{attr: 'class', val: 'mb-5'}]);
	const form = Html.Node('form', [{attr: 'id', val: 'form-edit-panel'}, {attr: 'class', val: 'row mb-3'}]);
	const divColSm = () => Html.Node('div', [{attr: 'class', val: 'col-sm-6'}]);
	const formGroup = () => Html.Node('div', [{attr: 'class', val: 'form-group'}]);
	const label = val => Html.Node('label', [{attr: 'for', val}, {attr: 'class', val: 'mt-4 mb-1'}]);
	const input = val => Html.Node('input', [{attr: 'autocomplete', val: 'off'}, {attr: 'type', val: 'text'}, 
		{attr: 'class', val: 'form-control'}, {attr: 'id', val}, {attr: 'placeholder', val}]);
	const formGroup1 = formGroup();
	const formGroup2 = formGroup();
	const divColSm1 = divColSm();
	const divColSm2 = divColSm();
	const label1 = label('title');
	const label2 = label('id');
	const p = Html.Node('p', [{attr: 'class', val: 'h4 mb-3 mt-3'}]);
	const goBack = Html.Node('a', [{attr: 'class', val: 'text-decoration-underline fw-light'}, {attr: 'href', val: '/system'}]);
	goBack.innerText = 'Voltar';
	label2.innerText = 'Por ID';
	label1.innerText = 'Por título';

	formGroup1.appendChild(label1);
	formGroup1.appendChild(input('title'));
	formGroup2.appendChild(label2);
	formGroup2.appendChild(input('id'));

	divColSm1.appendChild(formGroup1);
	divColSm2.appendChild(formGroup2);

	form.appendChild(divColSm1);
	form.appendChild(divColSm2);
	p.innerText = 'Pesquise o post que quer editar por título ou id:'
	editPanelHtml.appendChild(goBack);
	editPanelHtml.appendChild(p);
	editPanelHtml.appendChild(form);
	return editPanelHtml;
}

function funEditPanelCardHtml({ title, primary, description, _id, createdAt }, socket) {
	const div = val => Html.Node('div', [{attr: 'class', val}]);
	const img = val => Html.Node('img', [{attr: 'src', val}, {attr: 'class', val: 'card-img-top'}]);
	const h5 = () => Html.Node('h5', [{attr: 'class', val: 'card-title'}]);
	const p = () => Html.Node('p', [{attr: 'class', val: 'card-text'}]);
	const form = val => Html.Node('form', [{attr: 'method', val: 'GET'}, {attr: 'action', val}]);
	const a = val => Html.Node('a', [{attr: 'href', val }, {attr: 'target', val: '_blank'}, {attr: 'class', val: 'btn btn-primary m-1'}]);
	const small = () => Html.Node('small', [{attr: 'class', val: 'text-muted'}]);

	const editPanelCardHtml = div('col');

	const card = div('card h-100');
	const image = img(primary);
	const cardBody = div('card-body');
	const cardTitle = h5();
	const cardP = p();
	const cardSmall = small();
	
	const access = a(`/post=${_id}`);
	const edition = a(`/system.edition=${_id}`);
	const accessDiv = div('');
	const del = a(`#`);
	access.innerText = 'Acessar';
	edition.innerText = 'Editar';
	del.innerText = 'Deletar';
	del.setAttribute('class', 'btn btn-danger m-1');
	del.setAttribute('target', '_self');
	del.addEventListener('click', e => funDel(e, _id, socket));
	accessDiv.appendChild(access);
	accessDiv.appendChild(edition);
	accessDiv.appendChild(del);

	const cardFooter = div('card-footer');
	const footerSmall = small();

	cardTitle.innerText = title;
	cardP.innerText = description;
	cardSmall.innerText = `ID: ${_id}`;
	footerSmall.innerText = `Last update ${moment(createdAt, 'YYYYMMDD').fromNow()}`
	
	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardP);
	cardBody.appendChild(cardSmall);
	cardBody.appendChild(accessDiv);

	cardFooter.appendChild(footerSmall);

	card.appendChild(image);
	card.appendChild(cardBody);

	card.appendChild(cardFooter);

	editPanelCardHtml.appendChild(card);
	return editPanelCardHtml;
}

function returnPanel(socket, main) {
	const panelHtml = funEditPanelHtml();
	const editPanelHtml = Html.Node('div', [{attr: 'class', val: 'row row-cols-1 row-cols-md-3 g-4'}]);
	const p = Html.Node('p', [{attr: 'class', val: 'h4 mb-3'}]);
	p.innerText = 'Veja os últimos posts';

	const articles = [];
	socket.emit('req-articles');
	socket.on('re-articles', elms => {
		elms.forEach(elm => {
			const { title, description, primary, createdAt, _id  } = elm;
			articles.push({ title, description, primary, _id, createdAt });
		});
		articles.forEach(val => {
			const reEditPanelCardHtml = funEditPanelCardHtml(val, socket);
			editPanelHtml.appendChild(reEditPanelCardHtml);
		});

		document.querySelector('section').appendChild(panelHtml);
		document.querySelector('section').appendChild(p);
		document.querySelector('section').appendChild(editPanelHtml);
		return main.classList.toggle('d-none');
	});
}

function createEditPanel(e, socket) {
	e.preventDefault();
	const main = document.querySelector('main');
	e.target.classList.add('disabled');
	e.target.innerText = 'Carregando';
	return returnPanel(socket, main);
}

export function funEditionPost(edition, socket) {
	edition.addEventListener('click', e => createEditPanel(e, socket));
};
