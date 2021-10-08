export default function funRenderPosts() {
	const main = document.querySelector('#posts-category');
	setTimeout(() => main.querySelector('h3').remove(), 5000);
}