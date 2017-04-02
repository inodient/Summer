const mysql = require( "mysql" );
const syncSql = require( "sync-sql" );
const properties = require( "../../properties/db_properties.js" );

const pool = mysql.createPool( properties.dbConnectionInfo );

exports.dataAccess = function(){
  console.log( "dataAccess called..." );
  // console.log( properties.dbConnectionInfo );

  pool.query("select * from testAccessLog", (error, results, fields) => {
    if( error ) throw error;

    // console.log( results );
    // console.log( fields );
    console.log( "HERE" );

    return results;
  } );
}

exports.dataAccess2 = function(){
  console.log( "dataAccess2 called..." );

  var output = syncSql.mysql(
    properties.dbConnectionInfo,
    "select * from testAccessLog"
  );

  return output;
}

exports.dataInsert = function(){
  console.log( "dataInsert called..." );
  // console.log( properties.dbConnectionInfo );

  pool.query( "insert into testAccessLog values ( now(), 'myController', 'myView' )", (error, results, fields) => {
    if( error ) throw error;

    // console.log( results );
    // console.log( fields );

    return results;
  } );
}
