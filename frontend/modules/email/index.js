import Html from '../html';

export function funRenderEmail() {
	const event = document.querySelector('#form-email-render');
	const csurf = event.querySelector('input[name="_csrf"]').value;
	const values = [...event.querySelector('#hidden').querySelectorAll('input')].map(val => {
		const type = val.getAttribute('name');
		const value = val.value;
		return { type, value };
	});
	event.querySelector('button').addEventListener('click', () => eventD({ csurf, values, event }));
};

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
	    	color: #fff;
	    	text-align: center;">
			<h1>GI - Geek Infinity</h1>
		</span>`
		const footer = `<span style="width:100%;color:#fff;">
			<div style="text-align: center;
		    padding: 1rem;">
		    	<p>Escrito por:</p>
				<img style="height:60px;border-radius:100%;border:3px solid #fff;" 
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
			<div style="background:linear-gradient(#0d1319, #08092d);color:#fff;min-height:100vh;border-radius: 1rem;">
				${header}
				<div style="padding:.5rem;">
					<div style="border-radius:.5rem;text-align:center;padding:1rem;color:#fff;">
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
