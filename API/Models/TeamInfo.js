var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: String,
	description: String
});

var TeamInfo = mongoose.model('TeamInfo', schema);

// var doc = new TeamInfo({
// 	name: "Sacramento Kings",
// 	description: "The Sacramento Kings are an American professional basketball team based in Sacramento, California. The Kings compete in the National Basketball Association as a member of the Western Conference Pacific Division."
// })

// doc.save(function(err){
// 	if (err) return handleError(err);
// })

module.exports = TeamInfo;