module.exports = convert;

var textract = require('textract');
var requireAll = require('require-all');


var transforms = requireAll({
  dirname     :  __dirname + '/transforms',
  filter      :  /(.*)\.js$/
});

var order = [
  'abschnitte',
  'paragraphen',
  'aufzaehlungen',
  'text',
  'inhaltsuebersicht',
  'annotation',
  'manuell',
];
//var order = [];


function convert(filePath, options, callback) {
  textract('application/pdf', filePath, {
    preserveLineBreaks: true
  }, function(err, text) {
    if (err) {
      return callback(err);
    }

    order.forEach(function(which) {
      text = transforms[which](text);
    });

    callback(null, text);
  });
}
