'use strict';
const events = require('./events.js');
require('./driver.js');
require('./caps.js');
const faker = require('faker');
const order = {
    storName:process.env.STORE,
    orderId:faker.datatype.number(),
    customerName:faker.name.findName(),
    adress:faker.address.streetAddress(),
}

events.on('delivered', (payload)=>{
    // events.emit('',{order});
    console.log('Thank you');
})

setInterval(()=>{
    
    events.emit('pickup',{order})

},5000);
module.exports=order;