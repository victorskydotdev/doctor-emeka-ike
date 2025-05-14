import './scss/main.scss';

const contentWrap = document.querySelector('.content');

window.addEventListener('DOMContentLoaded', () => {
	if (contentWrap) {
		setTimeout(() => {
			contentWrap.classList.add('show-content');
		}, 300);
	}
});
