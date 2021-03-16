const request = require('request');

const forecast = (latitude,longtitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=f8443ab74848820d968d5d5abdbb8ac6&query=' + latitude + ',' + longtitude;

    request({ url: url, json: true }, (err, { body }) => {
        // const data = JSON.parse(body.body);
        if (err) {
            callback("error at network", undefined);
        }
        else if (body.error) {
            callback("error at server side",undefined);
        } else {
            callback(undefined , body.current.temperature);
        }
    })
}

module.exports ={
    forecast : forecast,
}