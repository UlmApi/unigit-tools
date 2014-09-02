module.exports = function(text) {
  // add h3
  text = text.replace(/\n\n *§([1-9] .*)\n (\(§.*\))\n/g, '\n\n### § $1 $2\n\n');
  text = text.replace(/\n\n *§ ([1-9][0-9]+ .*)\n/g, '\n\n### § $1\n\n');
  text = text.replace(/\n\n *§([1-9] .*)\n/g, '\n\n### § $1\n\n');
  text = text.replace(/\n § ([1-9][0-9]* .*)\n/g, '\n\n### § $1\n\n');

  return text;
}