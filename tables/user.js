const { Sequelize, DataTypes } = require( "sequelize" );
const sequelize = require( "../connection" );

const User = sequelize.define( "user", {
  id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true1
  },
  firstName: DataTypes.STRING,
  // lastName姓氏: DataTypes.STRING,
  // age: DataTypes.INTEGER,
  // gender: DataTypes.STRING,
} );

// await User.sync();

module.exports = User;