const express = require( "express" );
const bodyParser = require( "body-parser" );
const ejs = require( "ejs" ); // **

const app = express();

const dispatcher = require( "./container/dispatcher.js" );

app.set( "views", __dirname + "/views" ); // **
app.set( "view engine", "ejs" ); // **
app.engine( "html", ejs.renderFile ); // **

app.use( bodyParser.urlencoded({extended : true}) );



function test(){
  console.log( "testFunction" );
}

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
