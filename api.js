// const client = require('./connection')
const express = require('express');
const { where } = require( 'sequelize' );
const app = express();
const sequelize = require( './connection' );
const Event = require( './tables/event' );
const Parti = require( './tables/parti' );
const User = require('./tables/user')

async function main ()
{
  await sequelize.sync( { force: true } );
  /**  create sample data*/
  const player1 = await User.create( { firstName: 'player1' } );
  const player2 = await User.create( { firstName: 'player2' } );
  const butterfly = await Event.create( { style: 'butterfly', distance: '100' } );
  const freestyle = await Event.create( { style: 'freestyle', distance: '50' } );
  const frog = await Event.create( { style: 'frog', distance: '200' } );
  //  const backstroke = await Event.create({ style: 'backstroke' }, {distance: '100M'});
   
  // const player1 = await User.findOne({ where: {firstName: 'player1' }});
  // const player2 = await User.findOne( { where: {firstName: 'player2'} } );
  // const butterfly = await Event.findOne( { where: { style: 'butterfly' } });
  // const freestyle = await Event.findOne({ where: {style: 'freestyle'} });
  // const backstroke = await Event.findOne({ where: {style: 'backstroke'} });
  // const frog = await Event.findOne({ where: {style: 'frog'} });
  /**  Add events to users through Parti table */
  await player1.addEvents( [ butterfly, freestyle ] );
  await player2.addEvents( [ freestyle, frog ] );

  /** update Parti table */
  // await player1.setEvents( [ butterfly, freestyle ] );
  // await player2.setEvents( [ butterfly, backstroke ] );

  const parti1 = await Parti.findOne( {
    where: { userId: player1.id, eventId: butterfly.id }
  } );
  parti1.distance = butterfly.distance;
  await parti1.save();

  const parti2 = await Parti.findOne( {
    where: { userId: player1.id, eventId: freestyle.id }
  } );
  parti2.distance = freestyle.distance;
  await parti2.save();

  const parti3 = await Parti.findOne( {
    where: { userId: player2.id, eventId: freestyle.id }
  } );
  parti3.distance = freestyle.distance;
  await parti3.save();

  const parti4 = await Parti.findOne( {
    where: { userId: player2.id, eventId: frog.id }
  } );
  parti4.distance = frog.distance;
  await parti4.save();

  /**Query the Parti table to find out which events each user has chosen for parti */
  const player1Events = await player1.getEvents();
  const player2Events = await player2.getEvents();
  console.log( player1.firstName, 'has chosen', player1Events.map( x => `${ x.style } in ${ x.distance }M` ).join( ' & ' ) );
  
  console.log( player1.firstName, 'has chosen', player2Events.map( x => `${ x.style } in ${ x.distance }M` ).join( ' & ' ) );
}
main();