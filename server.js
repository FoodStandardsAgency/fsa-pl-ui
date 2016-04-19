var http 		= require('http'),	
    express		= require('express'),
    app			= express(),
    fs         	= require('fs'),
    path 		= require("path");

app.use(express.static('build'));

app.listen(3000, function() {
    console.log('listening');
});