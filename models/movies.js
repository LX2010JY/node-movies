var mongoose = require('mongoose');
var MovieSchemas = require('../schemas/movies');

var movie = mongoose.model('Movie',MovieSchemas);

module.exports = movie;

