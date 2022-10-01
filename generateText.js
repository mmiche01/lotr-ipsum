const generateText = (req) => {
	const { paragraphs, book } = req.body;

	const loremIpsum = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
	Id suscipit consequatur doloremque debitis aliquid minima quaerat
	 amet. Quisquam deleniti nam voluptas ut, similique sapiente molestiae
	 officia nulla odit dolore culpa mollitia provident eveniet error ipsa.
	 Reiciendis optio id sapiente aliquam dolorum modi odio? Explicabo quidem
	 deserunt ducimus fugiat atque voluptatibus iusto corporis enim porro et! Mini`;

	//  ...functionality

	return loremIpsum;
};

module.exports = generateText;
