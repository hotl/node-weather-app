# node-weather-app
A Node.js command line application that returns the weather based on your IP address

This project uses the yargs API to read user input from the command line
Usage: node app.js [-l | -location] {"location"}
  eg. node app.js -l "Irvine"
  >> It's 78 degrees in Irvine
  
If no location is passed, the app will fetch weather data based on the location of your IP address
Usage: node app.js
  eg. node app.js
  >> City: Rancho Palos Verdes
  >> lat/long: 33.7584,-118.3163
  >> It's 64.6 degrees in Rancho Palos Verdes
