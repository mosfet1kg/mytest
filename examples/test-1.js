const {createClient} = require('../lib/main');

const client = createClient({ host: '10.112.105.123', port: '9090'});

client.on( (evt)=>{
  console.log( evt );
});
