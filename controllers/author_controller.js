const models = require('../models');


const index = async (req, res) => {
	const all_authors = await models.Author.fetchAll();

	res.send({
		status: 'success',
		data: {
			authors: all_authors
		}
	});
}

const show = async (req, res) => {
	const author = await new models.Author({ id: req.params.authorId }).fetch({ withRelated: 'books'});    // select * from books where id = 1

	res.send({
		status: 'success',
		data: {
			author,
		}
	});
}

module.exports = {
    index,
    show
};