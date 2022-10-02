const generateText = (req) => {
	const requestedParagraphs = req.body.paragraphs;
	const bookSource = require(`./data/${req.body.book}`);
	const wordsPerParagraph = 400;
	let loremIpsum;

	for (let i = 1; i <= requestedParagraphs; i++) {
		let newParagraph = '<p>';
		while (newParagraph.length < 400) {
			newParagraph += bookSource[Math.floor(Math.random() * bookSource.length)] + '. ';
		}
		loremIpsum += newParagraph + '</p>';
	}

	return loremIpsum;
};

module.exports = generateText;
