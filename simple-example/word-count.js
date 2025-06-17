
const ignore = /[\.,]/g;

const separator = ' ';

function wordCount(sentence) {
	return sentence
		.replace(ignore, '')
		.toLowerCase()
		.split(separator)
		.reduce((prev,current) => {
			prev[current] = prev[current] + 1 || 1;
			return prev;
		}, {});
}


export { wordCount }