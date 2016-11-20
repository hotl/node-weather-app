var request = require('request');

module.exports = function() {
	return new Promise(function(resolve, reject) {
		const url = 'http://ipinfo.io';

		request({
			url: url,
			json: true
		}, function(error, response, body) {
			if (error) {
				reject('Cannot fetch location data');
			} else {
				resolve(body);
			}
		});
	});
}