module.exports = function(text) {
  // remove newlines with hyphenation
  text = text.replace(/([\u00C0-\u017Fa-z\(\)]+)-\n{1,2}\s?([\u00C0-\u017F\w\(\)\-§]+)/g, '$1$2');

  // remove newlines
  text = text.replace(/([\u00C0-\u017F\w\(\),\.]+)\n[^\S\n]?(([\u00C0-\u017FA-Za-z\(\)\-§]+|[1-9][0-9]* ))/g, '$1 $2');

  var rows = text.split(/\n/);
  rows = rows.map(function(row) {
  	row = row.replace(/ , /g, ', ');

  	return row;
  });
  text = rows.join('\n');

  return text;
}