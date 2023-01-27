const { Sequelize } = require( 'sequelize' );

const sequelize = new 

    // Sequelize( 'postgres://kyleau:19970806@localhost:5433/kyle97au' )
    // Sequelize( 'postgres://kyleau:970806@localhost:5433/kyle97au' )
    Sequelize( 'postgres://postgres:970806@localhost:5432/postgres' )
 /**  'postgres://user:pw@hostName:port/dbname'*/

module.exports = sequelize;


// const {Client} = require('pg')
// module.exports = client;
``