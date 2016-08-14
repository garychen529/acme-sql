var express = require('express');
var app = express();

app.listen(process.env.PORT, function() {
	console.log('Server is listening on port ' + process.env.PORT);
});