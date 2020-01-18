// mqtt
const mqtt = require('../mosca.js');


mqtt.on('clientConnected', client=>{
    console.log('client connected', client.id);
});

mqtt.on('published', (packet, client) =>{
  console.log('Published', packet.payload);
});

mqtt.on('ready', ()=>{
  console.log('Mosca server is up and running');
});
