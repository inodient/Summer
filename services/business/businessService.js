const db = require( "../common/dataService.js" );

exports.businessService = function(){
  console.log( "Business Service called..." );

  // var resultPromise = function(){
  //   return new Promise( function( resolve, reject ){
  //     resolve( db.dataAccess() );
  //   } );
  // }
  //
  // resultPromise().then( function( results ){
  //   console.log( results );
  //   console.log( "typeof results : " + typeof results );
  // }, function( error ){
  //   throw error;
  // } );

  // console.log( db.dataAccess2() );

  var results = db.dataAccess2();

  // console.log( results["data"] );

  return results;

  // console.log( "get : " + results );
}

exports.businessService2 = function(){
  console.log( "Business Service 2 called..." );

  var results = db.dataInsert();
}
