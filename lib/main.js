var fs = require('fs'),
    render = require('./render').render;

exports.init = function(argv) {
  if (!argv.file) {
    console.log('Please specify a file with the --file option');
    console.log('Usage: cleaver --file input.json');
    process.exit(1);
  }

  fs.readFile(argv.file, 'utf8', function(err, data) {
    if (err) throw err;
    var contents = JSON.parse(data.replace(/\n/g,''));
    render(contents, argv);
  });

};
