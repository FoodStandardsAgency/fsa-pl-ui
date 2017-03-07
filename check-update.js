const https = require('https');

var options = {
  hostname: 'raw.githubusercontent.com',
  port: 443,
  path: '/FoodStandardsAgency/fsa-pl/master/scss/_builddatetime.scss',
  method: 'GET'
};

var fs = require('fs');
var lastUpdate = 0;
if (fs.existsSync('timestamp')) {
  fs.readFile('timestamp', 'utf8', (err, data) => {
    if (err) throw err;
    lastUpdate = parseInt(data);
  });
}


var req = https.request(options, (res) => {

  res.on('data', (d) => {
    if (res.statusCode == 200 && d) {
      var tester = d.toString();
      var pattern = /^\$builddatetime: \"([0-9]+)\";.*/;
      var whitespacePattern = /\r?\n|\r/g;
      var dateTime = parseInt(tester.replace(pattern, "$1").replace(whitespacePattern, ''));
      console.log(dateTime);
      console.log(lastUpdate);
      if (dateTime > lastUpdate) {
        fs.writeFile("timestamp", dateTime, function(err) {
          if(err) {
            return console.log(err);
          }
          var exec = require('child_process').exec;
          var cmd = 'npm run rebuild';
          exec(cmd, function(error, stdout, stderr) {
            console.log(stdout);
          });
          console.log("The file was saved!");
        });
      }
    }
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();