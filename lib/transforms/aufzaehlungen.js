module.exports = function(text) {
  var rows = text.split(/\n/);
  rows = rows.map(function(row) {
    // enumeration of form '(3) Text'
    row = row.replace(/^ *\([1-9][0-9]*\) (.*)$/, '1. $1');

    // enumeration of form '  3. Text'
    row = row.replace(/^(\s+)[1-9][0-9]*\. (.*)$/, align('$1')+'1. $2')

    // enumeration of form ' - Text'
    row = row.replace(/^(\s+)\- (.*)$/, align('$1')+'* $2');

    return row;
  });
  text = rows.join('\n');

  return text;
}


function align(spaces, by) {
  by = by || 4;
  return new Array((spaces.length-1)*by+1).join(' ');
}