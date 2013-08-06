var config = require('./config');
var loginEmail = require('./login-email');

var pubnub = require('pubnub').init({
    publish_key: config.pubnub.publish_key,
    subscribe_key: config.pubnub.subscribe_key
});

pubnub.subscribe({
    channel: 'login_email',
    callback: loginEmail.send
});