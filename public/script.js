const btnCopy = document.querySelector('.btn-copy');

btnCopy.addEventListener('click', copyToClipboard);

function copyToClipboard() {
	textToCopy = document.querySelector('.lorem-ipsum-text').innerText;
	navigator.clipboard.writeText(textToCopy).then(
		() => {
			alert('Copied');
		},
		() => {
			alert('Copy failed');
		}
	);
}
