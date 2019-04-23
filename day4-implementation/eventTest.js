const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('Logging',function(){
    console.log('Logging event is raised');
});
emitter.on('greeting',function(response){
    console.log(`Welcome to node js ${response.greeting}`);
});
emitter.emit('Logging');

setTimeout(() =>{
    emitter.emit('greeting', {greeting:'Some action has been taken'}); 
},3000);