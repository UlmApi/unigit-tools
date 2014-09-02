module.exports = function(text) {
  text = text.replace(/Inhaltsübersicht\n\nVorbemerkung zum Sprachgebrauch\n\n[\s\S]+(Vorbemerkung zum Sprachgebrauch)/, '$1');

  return text;
}