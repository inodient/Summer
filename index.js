const container = require( "./app.js" );

// for test
container.setViewPath( "/Users/changhokang/git/Nodejs/Summer" );
container.setDispatcherPath( "/Users/changhokang/git/Nodejs/Summer/container" );
container.setControllerPath ( "/Users/changhokang/git/Nodejs/Summer/controller" );
container.setBusinessServicePath ( "/Users/changhokang/git/Nodejs/Summer/services/business" );
container.setDataServicePath ( "/Users/changhokang/git/Nodejs/Summer/services/common" );

// for release
exports.printInfo = function(){
  console.log( "spring-summber" );
}

exports.setViewPath = function( path ){
  container.setViewPath( path );
}

exports.setDispatcherPath = function( path ){
  container.setDispatcherPath( path );
}

exports.setControllerPath = function( path ){
  container.setControllerPath( path );
}

exports.setBusinessServicePath = function( path ){
  container.setBusinessServicePath( path );
}

exports.setDataServicePath = function( path ){
  container.setDataServicePath( path );
}
