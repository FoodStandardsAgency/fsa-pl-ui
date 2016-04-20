var express		= require('express'),
    app			= express(),
    port        = process.env.PORT || 3000; // set the port

app.use(express.static(__dirname + '/build'));

app.listen(port, function() {
    console.log('listening');
});

// var http = require("http"),
//     url = require("url"),
//     path = require("path"),
//     fs = require("fs"),
//     port = process.env.PORT || 3000;
//
//
// http.createServer(function(request, response) {
//
//     var uri = url.parse(request.url).pathname
//         , filename = path.join(process.cwd(),"/build/" + uri );
//
//     var contentTypesByExtension = {
//         '.html': "text/html",
//         '.css':  "text/css",
//         '.js':   "text/javascript"
//     };
//
//     fs.exists(filename, function(exists) {
//         if(!exists) {
//             response.writeHead(404, {"Content-Type": "text/plain"});
//             response.write("404 Not Found\n");
//             response.end();
//             return;
//         }
//
//         if (fs.statSync(filename).isDirectory()) filename += 'index.html';
//
//         fs.readFile(filename, "binary", function(err, file) {
//             if(err) {
//                 response.writeHead(500, {"Content-Type": "text/plain"});
//                 response.write(err + "\n");
//                 response.end();
//                 return;
//             }
//
//             var headers = {};
//             var contentType = contentTypesByExtension[path.extname(filename)];
//             if (contentType) headers["Content-Type"] = contentType;
//             response.writeHead(200);
//             response.write(file, "binary");
//             response.end();
//         });
//     });
// }).listen(parseInt(port, 10));
//
// console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");