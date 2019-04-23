const EventEmitter = require('events');
// ES6 - sugar syntax for creating constructor function
class Logger extends EventEmitter {
    // a function inside a class is called method
    log(message) {
        // send an HTTP request
        console.log(message);
        // raise an event from the class
        this.emit('messageLogged', 'messageLogged emitted');
    }
}
module.exports = Logger;