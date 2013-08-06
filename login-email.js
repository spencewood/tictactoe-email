var config = require('./config');
var trebuchet = require('trebuchet')(config.postmark.api_key);

module.exports = {
    send: function(message){
        trebuchet.fling({
            params: {
                from: config.postmark.from_email,
                to: message.email,
                subject: 'Tic Tac Toe login'
            },
            html: __dirname + '/templates/login.html',
            text: __dirname + '/templates/login.txt',
            data: {
                token: message.token
            }
        }, function(err, res){
            if(err !== null){
                console.error(err, res);
            }
        });
    }
};