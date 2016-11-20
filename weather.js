var request = require('request');

module.exports = function(location) {

	return new Promise(function(resolve, reject) {
		
		const OPEN_WEATHER_MAP_URL = 
			'http://api.openweathermap.org/data/2.5/weather?'
			+ 'appid=7442ed1585608d5123e5e943c9b80689&units=imperial'
			+ '&q=' + encodeURI(location);

			if (!location) {
				return reject('No location provided');
			}

			request({
			url: OPEN_WEATHER_MAP_URL,
			json: true
			}, function(error, response, body) { // callback function
				if (error) {
					reject('Unable to fetch weather');
				} else {
					// console.log(JSON.stringify(body, null, 5));
					resolve('It\'s ' + body['main']['temp'] + ' degrees in '
						+ body['name']);
				}
			});
	});
}