const { Sequelize, DataTypes } = require( "sequelize" );
const sequelize = require( "../connection" );

const Parti = sequelize.define( 'parti', {} );

const User = require( "./user" );
const Event = require( "./event" );

User.belongsToMany(Event, { through: Parti });
Event.belongsToMany(User, { through: Parti });

module.exports = Parti;

// in hub test
