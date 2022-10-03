const btnCopy = document.querySelector('.btn-copy');
const textArea = document.querySelector('.lorem-ipsum-text');

btnCopy.addEventListener('click', copyToClipboard);

function copyToClipboard() {
	textToCopy = textArea.innerText;
	navigator.clipboard.writeText(textToCopy).then(
		() => {
			showTooltip();
		},
		() => {
			alert('Copy failed');
		}
	);
}

function showTooltip() {
	const tooltip = document.createElement('span');
	tooltip.classList.add('tooltip');
	tooltip.innerText = 'Copied!';
	textArea.prepend(tooltip);
	setTimeout(() => {
		tooltip.remove();
	}, 1000);
}
