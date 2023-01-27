// const { Sequelize, DataTypes } = require( "sequelize" );
// const sequelize = require( "../connection" );
// const User = require( "./user" );

// const Parti = sequelize.define( "participant", {
//   id: {
//     allowNull: false,
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   EventId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Event,
//       key: 'id'
//     }
//   },
//   UserId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'id'
//     }
//   }
// } );

// // await User.sync();

// module.exports = Parti;