function cleanUp(inputs) {
	let items = inputs;
	const errors = [];
	for(let item in items) {
		if((items[item].value.length <= 0) 
			|| (typeof items[item].value !== 'string') 
			|| (items[item].getAttribute(name) !== '_csrf' && items[item].value.length > 50)) 
		{
			errors.push(`Algum item foi mal digitado`);
			items = null;
			break;
		}
	}
	return { items, errors };
}

const fun = e => {
	e.preventDefault();
	const { target } = e;
	const filterInputs = funValidator([...target.querySelectorAll('input')]);
	filterInputs === true ? e.target.submit() : window.location.href = '/';
	return;
};

export default function funStaff() {
	const forms = document.querySelectorAll('form');
	for(let form of forms) {
		form.addEventListener('submit', fun);
	};
};

function funValidator(inputs) {
	const activeIp = cleanUp(inputs);
	if(activeIp.items && activeIp.errors.length === 0) return true;
	return null;
}