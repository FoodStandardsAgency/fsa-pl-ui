var http 		= require('http'),	
    express		= require('express'),
    app			= express(),
    fs         	= require('fs'),
    path 		= require("path"),
    port = process.env.PORT || 3000; // set the port

app.use(express.static('build'));

app.listen(port, function() {
    console.log('listening');
});