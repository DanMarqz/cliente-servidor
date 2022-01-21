var express = require('express');
var app = express();

app.get( '/' , home);
app.get( '/help' , help);

function home( req, res ){
  res.send( 'This is home server' )
}

function help( req, res ){
  res.send( 'This is help page' )
}

app.listen(5000);