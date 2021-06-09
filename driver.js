'use strict';
const events = require('./events.js');
require('./vendor.js');
require('./caps.js');

events.on('pickup',(paylaod)=>{
    setInterval(()=>{
        console.log( `DRIVER: picked up ${paylaod.orderId}` );
        events.emit('intransit',(paylaod));
    },1000)

    setInterval(()=>{
       console.log('Delivered');
       events.emit('delivered',(paylaod));
    },3000);
    
})