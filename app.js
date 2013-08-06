var config = require('./config');
var loginEmail = require('./login-email');

var pubnub = require('pubnub').init({
    publish_key: config.pubnub.publish_key,
    subscribe_key: config.pubnub.subscribe_key
});

var channel = function(name){
    return name + (config.isDevelopment ? '-dev' : '');
};

pubnub.subscribe({
    channel: channel('user:loginEmail'),
    callback: loginEmail.send
});