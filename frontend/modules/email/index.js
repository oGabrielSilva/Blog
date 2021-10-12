import Html from '../html';

function eventD({ csurf, values, event }) {
	const form = Html.Node('form', [{attr: 'method', val: 'POST'}, {attr: 'action', val: '/postmail'}]);
	values.forEach(value => {
		const type = Html.Node('input', [{attr: 'name', val: value.type}, {attr: 'value', val: value.value}]);
		form.appendChild(type);
	});
	const to = Html.Node('input', [{attr: 'name', val: 'to'}]);
	const subject = Html.Node('input', [{attr: 'name', val: 'subject'}]);
	const html = Html.Node('textarea', [{attr: 'name', val: 'html'}]);
	const csrf = Html.Node('input', [{attr: 'type', val: 'hidden'}, {attr: 'name', val: '_csrf'}]);

	to.setAttribute('value', `${event.querySelector('#to').value}`);
	subject.setAttribute('value', `${event.querySelector('#subject').value}`);
	if(html) {
		const header = `<span style="display:block;
	    	padding: 1rem 0 1rem 0;
	    	width: 100%;
	    	color: #000;
	    	text-align: center;">
			<h1>GI - Geek Infinity</h1>
		</span>`
		const footer = `<span style="width:100%;color:#000;">
			<div style="text-align: center;
		    padding: 1rem;">
		    	<p>Escrito por:</p>
				<img style="height:60px;border-radius:100%;border:3px solid #000;" 
				src="${form.querySelector('input[name="_img"]').value}">
				<p>${form.querySelector('input[name="_name"]').value}</p>
				<p>CEO | Desenvolvedor | Server-side | Client-side | GI</p>
				<p><strong>Geek Infinity</strong></p>
				<p><strong>Brasil</strong></p>
			</div>
			<div style="text-align:center;padding:0 0 1rem 0;">
				<div>
					<a target="_blank" href="${form.querySelector('input[name="_github"]').value}">Github</a>
				</div>
				<div>
					<a target="_blank" href="${form.querySelector('input[name="_twitter"]').value}">Twitter</a>
				</div>
			</div>
			<div style="text-align:center;padding:0 0 1rem 0;">
				<p>Para: <a href="mailto:${to.value}">${to.value}</a></p>
			</div>
		</span>`
		html.innerText = `
		<span>
			<div style="background:#f8f9fa;color:#000;min-height:100vh;border-radius: 1rem;">
				${header}
				<div style="padding:.5rem;">
					<div style="border-radius:.5rem;text-align:center;padding:1rem;color:#000;">
						${event.querySelector('#html-text').value}
					</div>
				</div>
				${footer}
			</div>
		</span>`;
	}
	csrf.setAttribute('value', csurf);

	form.appendChild(to);
	form.appendChild(subject);
	form.appendChild(html);
	form.appendChild(csrf);

	const container = Html.Node('div', [{attr: 'class', val: 'd-none'}]);
	container.appendChild(form);
	document.body.appendChild(container);
	form.submit();
}

function eventDF({ e, event, csrf }) {
	const form = Html.Node('form', [{attr: 'method', val: 'POST'}, {attr: 'action', val: '/postmail.feedback'}]);
	const name = Html.Node('input', [{attr: 'name', val: 'name'}]);
	const to = Html.Node('input', [{attr: 'name', val: 'to'}]);
	const subject = Html.Node('input', [{attr: 'name', val: 'subject'}]);
	const html = Html.Node('textarea', [{attr: 'name', val: 'html'}]);
	const csurf = Html.Node('input', [{attr: 'type', val: 'hidden'}, {attr: 'name', val: '_csrf'}, {attr: 'value', val: csrf}]);

	to.setAttribute('value', `${event.querySelector('#to').value}`);
	name.setAttribute('value', `${event.querySelector('#name').value}`);
	subject.setAttribute('value', `${event.querySelector('#subject').value}`);
	html.innerText = `${event.querySelector('#html-text').value}`;

	const test = { to, name, subject, html };
	for(let item in test) {
		if (test[item].nodeName === 'INPUT' && test[item].value === '') {
			e.target.classList.remove('btn-primary');
			e.target.classList.add('btn-danger');
			e.target.parentElement.querySelector('#danger').innerText = 'Algum campo está incompleto';
			return setTimeout(() => {
				e.target.classList.remove('btn-danger');
				e.target.classList.add('btn-primary');
			}, 450);
		}
		else if (test[item].nodeName === 'TEXTAREA' && test[item].innerText === '') {
			e.target.classList.remove('btn-primary');
			e.target.classList.add('btn-danger');
			e.target.parentElement.querySelector('#danger').innerText = 'Algum campo está incompleto';
			return setTimeout(() => {
				e.target.classList.remove('btn-danger');
				e.target.classList.add('btn-primary');
			}, 450);
		}
	}

	form.appendChild(to);
	form.appendChild(name);
	form.appendChild(subject);
	form.appendChild(html);
	form.appendChild(csurf);

	const container = Html.Node('div', [{attr: 'class', val: 'd-none'}]);
	container.appendChild(form);
	document.body.appendChild(container);
	form.submit();
}

function funRenderFeedback() {
	const event = document.querySelector('#form-feedback-render');
	const csrf = event.querySelector('input[name="_csrf"]').value
	event.querySelector('button').addEventListener('click', e => eventDF({ e, csrf, event }));
}

export function funRenderEmail() {
	const event = document.querySelector('#form-email-render');
	if(!event) return funRenderFeedback()
	const csurf = event.querySelector('input[name="_csrf"]').value;
	const values = [...event.querySelector('#hidden').querySelectorAll('input')].map(val => {
		const type = val.getAttribute('name');
		const value = val.value;
		return { type, value };
	});
	event.querySelector('button').addEventListener('click', () => eventD({ csurf, values, event }));
};
