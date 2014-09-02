module.exports = function(text) {
  text = text.replace(/\n+\s?(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))\. /g, '\n\n## $1. ');

  return text;
}