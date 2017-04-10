const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'path', alias: 'u', type: String },
  { name: 'secret', alias: 's', type: String },
  { name: 'port', alias: 'p', type: Number },
];
const options = commandLineArgs(optionDefinitions);
const port = options.port ? options.port : 5000;

const webhookPath = options.path ? options.path : false;
const webhookSecret = options.secret ? options.secret : false;

const http = require('http');
const createHandler = require('github-webhook-handler');

const handler = createHandler({ path: '/' + webhookPath, secret: webhookSecret });

if (!webhookPath || !webhookSecret) {
  return;
}


http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});


handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
    var exec = require('child_process').exec;
    var cmd = 'npm run redeploy';
    exec(cmd, function(error, stdout, stderr) {
      console.log(stdout);
    });
});
