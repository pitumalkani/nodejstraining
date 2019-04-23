const LoggerClass = require('./logger');
console.log(LoggerClass);
const x = new LoggerClass();
// Register a listener
x.on('messageLogged', function (arg) {
    console.log('Listener called', arg);
});
x.log('message');
