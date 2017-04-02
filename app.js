const express = require( "express" );
const bodyParser = require( "body-parser" );
const ejs = require( "ejs" );

const app = express();

var dispatcher = require( "./container/dispatcher.js" );




exports.setViewPath = function( path ){
  app.set( "views", path + "/views" );
}

exports.setDispatcherPath = function( path ){
  dispatcher = require( path + "/dispatcher.js" );
}

exports.setControllerPath = function( path ){
  dispatcher.setControllerPath( path );
}

exports.setBusinessServicePath = function( path ){
  dispatcher.setBusinessServicePath( path );
}

exports.setDataServicePath = function( path ){
  dispatcher.setDataServicePath( path );
}




// app.set( "views", __dirname + "/views" ); // **
app.set( "view engine", "ejs" ); // **
app.engine( "html", ejs.renderFile ); // **

app.use( bodyParser.urlencoded({extended : true}) );




app.get( "/*", (req, res) => {
  var dispatched = dispatcher.dispatching( req );

  console.log( "dispatched model.................." );
  console.log( dispatched.model["data"] );
  console.log( "----------------------------------" );

  res.render( dispatched.view, dispatched.model );
} );

app.post( "/*", (req, res) => {
  var dispatched = dispatcher.dispatching( req );

  res.send( dispatched.model, dispatched.model  );
} );

app.listen( "3003", () => {
  console.log( "Listen port 3003...." );
} );
