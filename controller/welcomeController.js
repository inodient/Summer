var services = require( "../services/business/businessService.js" );




exports.setBusinessServicePath = function( path ){
  services = require( path + "/businessService.js" );
}

exports.setDataServicePath = function( path ){
  services.setDataServicePath( path );
}




exports.welcomeController = function( req ){
  var model = services.businessService();

  return model;

  // console.log( req );
}

exports.welcomeController1 = function( req ){
  services.businessService2();
  // console.log( req );
}

exports.welcomeController2 = function( req ){
  services.businessService();
  // console.log( req );
}

exports.welcomeController3 = function( req ){
  services.businessService();
  // console.log( req );
}

exports.welcomeController4 = function( req ){
  services.businessService();
  // console.log( req );
}
