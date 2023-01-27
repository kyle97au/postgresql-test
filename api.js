// const client = require('./connection')
const express = require('express');
const { Model } = require('sequelize');
const app = express();
const sequelize = require( './connection' );
const Event = require( './tables/event' );
const Parti = require( './tables/parti' );
const User = require('./tables/user')

try {
    sequelize.authenticate();
    console.log('Connection success.');
  } catch (error) {
    console.error('Unable to connect', error);
  }

// User.belongsToMany(Event, {through: Parti});
// Event.belongsToMany( User, { through: Parti } );
// Parti.belongsTo( User );
// Parti.hasOne( Event );

sequelize
  .sync()
  .then( user =>
  {
      return User.create( { firstName: 'JJ', lastName姓氏: 'Au', age: '25', gender: 'M'});
    return User;
  } )
  .then( event =>
    {
      return Event.update( {style: 'update update', distance: '400m'}, {where: {id: 2}} );
    }
    
    )
    .then( event =>
      {
        return Event.destroy( {where: {id: 3}} );
      }
      
      )
    // .then( user =>
    // {
    //     return User.create( { firstName: 'X', lastName姓氏: 'YZ', age: '99', gender: 'M'});
      // return User;
    // } )
  .then( cart =>
  {
    app.listen( 4000 );
    console.log("Sever is now ok!");
  })
  // /** 5. Get User by Id */
  // app.get('/users/:id', (req, res)=>{
  //     client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
  //         if (!err) {
  //             res.send(result.rows);
  //         } else {
  //             console.log(err.message);
  //         }
  //     });
  //     client.end;
  // })
//     .then( cart =>
//     {
//     app.listen( 4000 )
//     console.log("Sever is now ok!");
        
//     })

// client.connect();

/** 4. Get all users */
// app.get('/', (req, res)=>{
//     client.query(`Select * from users ORDER BY id ASC `, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })


// /** handle conversion to and from json */
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// /** 6. Add New User */
// app.post('/users', (req, res)=> {
//     const user = req.body;
//     console.log(user);
//     let insertQuery = `insert into users(id, firstname, lastname, location) 
//                        values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`

//     client.query(insertQuery, (err, result)=>{
//         if(!err){
//             res.send('Insertion was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// })

// /** 7. Update User Details */
// app.put('/users/:id', (req, res)=> {
//     let user = req.body;
//     let updateQuery = `update users
//                        set firstname = '${user.firstname}',
//                        lastname = '${user.lastname}',
//                        location = '${user.location}'
//                        where id = ${user.id}`

//     client.query(updateQuery, (err, result)=>{
//         if(!err){
//             res.send('Update was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// })

// /** 8. Delete a User */
// app.delete('/users/:id', (req, res)=> {
//     let insertQuery = `delete from users where id=${req.params.id}`

//     client.query(insertQuery, (err, result)=>{
//         if(!err){
//             res.send('Deletion was successful')
//         }
//         else{ console.log(err.message) }
//     })
//     client.end;
// } );