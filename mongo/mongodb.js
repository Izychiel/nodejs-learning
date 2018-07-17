const mongoose = require('mongoose');
const {User} = require('./users-mongo.js');



// const newUser = new userModel({login: "Malo", password: "MDP"});	// CREATE NEW user FROM MODEL userModel
// newUser.save(function (err) {
// 	if(err) {throw err};
// 	console.log('User added');
// });

const newUser = new User('5b4cafbc263ecd0a73850214');
console.log(newUser.infos);