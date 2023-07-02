const { Sequelize, DataTypes } = require( "sequelize" );
const sequelize = require( "../connection" );

const Event = sequelize.define( "event", {
  id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  style: DataTypes.STRING,
  distance: DataTypes.STRING,
  // eventTime: DataTypes.INTEGER,
} );

// await User.sync();

module.exports = Event;

// hub test
