const observer = require('./observer');

function publish(index) {
    console.log('Publish called');
    observer.emit('alert', `Publishing event ${index} times`);
}

module.exports = publish;