var weather = require('./weather');
var location = require('./location');
var argv = require('yargs')
	.option('location', {
		alias: 'l',
		demand: false,
		describe: 'Location to search for weather',
		type: 'string'
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	weather(argv.l).then(function(weatherMessage) {
		console.log(weatherMessage);
	}, function(error) {
		console.log(error);
	});

} else {
	location().then(function(loc) {
		console.log('City: ' + loc.city);
		console.log('lat/long: ' + loc.loc);
		return weather(loc.city);
	}).then(function(weatherMessage) {
		console.log(weatherMessage);
	})
	.catch(function(error) {
		console.log(error);
	});
}

