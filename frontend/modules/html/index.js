export default class Html {
	static Node(node, attr) {
		const html = document.createElement(node);
		if(!attr) return html;

		for(let elm of attr) {
			html.setAttribute(elm.attr, elm.val);
		};
		return html;
	};
};
