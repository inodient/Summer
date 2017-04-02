const fs = require( "fs" );
const parse = require( "xml-parser" );
const inspect = require( "util" ).inspect;

const xml = fs.readFileSync( "container/container.xml", "utf-8" );

const controller = require( "../controller/welcomeController.js" );




function ModelAndView( model, view ){
  this.model = model;
  this.view = view;
}

exports.dispatching = function( req ){

  // get req specifics
  var reqMethod = req.method;
  var reqUrl = req._parsedUrl;

  var reqOriginalUrl = req.originalUrl;
  var reqPath = reqUrl.pathname;
  var reqParam = req.params;
  var reqQuery = req.query;
  var reqBody = req.body;

  console.log( reqBody );

  // parse container.xml
  containerValue = parse( xml );

  var servlets = containerValue.root.children;
  var length = servlets.length;

  var servlet;
  var servletId = "";
  var servletPath = "";
  var servletController = "";
  var servletView = "";

  // Find view and controller
  for( var i=0; i<length; i++ ){

    var method = servlets[i].attributes.method;

    if( method.toUpperCase === reqMethod.toUpperCase ){
      servlet = servlets[i].children;

      if( servlet[1].content === reqPath ){
        servletId = servlet[0].content;
        servletPath = servlet[1].content;
        servletController = servlet[2].content;
        servletView = servlet[3].content;

        var model = controller[servletController]( req );

        // console.log( model );
      }

      // console.log( servletId );
      // console.log( servletPath );
      // console.log( servletController );
      // console.log( servletView );
    }
  }

  var mav = new ModelAndView( model, servletView );

  return mav;
}
