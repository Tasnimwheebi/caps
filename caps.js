'use strict';
const events = require('./events.js');
const driver=require('./driver.js');
const vendor = require('./vendor.js');

events.on('pickup',(payload)=>{
    console.log('Event ',`{events : ${events} , time: ${new Date()},paylaod:${payload}}`);
});

events.on('intransit',(payload)=>{
    console.log('Event ',`{events : ${events} , time: ${new Date()},paylaod:${payload}}`);
});

events.on('delivered',(payload)=>{
    console.log('Event ',`{events : ${events} , time: ${new Date()},paylaod:${payload}}`);
});

module.exports=events;