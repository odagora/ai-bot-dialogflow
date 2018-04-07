var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	date: Date,
	opponent: String,
	hasBeenPlayed: Boolean,
	isWinner: Boolean,
	score: String
});

var GameSchedule = mongoose.model('GameSchedule', schema);

// var doc = new GameSchedule({
// 	date: "2018-02-07T14:30:00Z",
//     opponent: "Portland",
//     hasBeenPlayed: true,
//     isWinner: true,
//     score: "110-130"
// })

// doc.save(function(err){
// 	if (err) return handleError(err);
// })

module.exports = GameSchedule;