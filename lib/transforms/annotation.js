module.exports = function(text) {
  text = text.replace(/(Veröffentlicht in den Amtlichen Bekanntmachungen .*)\n\n\n Fachspezifisch/, '> $1\n\n# Fachspezifisch');

  text = text.replace(/(Aufgrund von § 19 Abs. 1)/, '> $1');

  text = text.replace(/Vorbemerkung zum Sprachgebrauch Nach Artikel/, '### Vorbemerkung zum Sprachgebrauch\n\nNach Artikel');

  return text;
}