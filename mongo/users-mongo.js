(function (){

	// MONGOOSE USER SCHEMA
	const userSchema = new mongoose.Schema({
		login: String,
		password: String,
		create: {type : Date, default: Date.now},
		lastLogin: {type : Date, default: Date.now}
	});
	const userModel = mongoose.model('users', userSchema);	//	MONGOOSE USER MODEL = CREATE COLLECTION users

	// USER OBJECT
	const User = function(id, login) {
		this.password, this.login;


		this.infos = function (id, login){	// SET ALL VALUES
			if(id){
				userModel.findOne({_id:id}, function(err, user){
					console.log(user);
				});
			}else if(login){
				
			}
		},
		this.create = function (){

		},
		this.remove = function(){},
		this.setLogin = function(){},
		this.getLogin = function(){},
		this.setPassword = function(){},
		this.checkPassword = function(){},
		this.logged = function(){}
	};
	module.exports.User = User;
})();