const bcrypt = require('bcrypt-node');

module.exports = (Types, sequelize) => {
	//@doc: Model "users"

	const Users = sequelize.define('users', {
		name: { type: Types.STRING(40), allowNull: false },
		surname: { type: Types.STRING(40), allowNull: false },
		phone: { type: Types.STRING(100), allowNull: true },
		email: {
			type: Types.STRING(50),
			allowNull: false,
			set(val) {
	      this.setDataValue('email', val.toLowerCase());
	    }
		},
		gdpr: { type: Types.BOOLEAN, allowNull: false },
    disabled: { type: Types.BOOLEAN, defaultValue: false },
		nation: {type: Types.STRING(5), allowNull: false, defaultValue: 'it'},
		profileImage: { type: Types.STRING(250), allowNull: true },
		password: {
			type: Types.STRING,
			allowNull: true,
			set:  function(v) {
				let salt = bcrypt.genSaltSync(10);
				let hash = bcrypt.hashSync(v, salt);
				this.setDataValue('password', hash);
			}
		}
	},{
		classMethods: {
			validPassword: function(password, passwd, done, user){
				bcrypt.compare(password, passwd, function(err, isMatch){
					if (isMatch) {
						return done(null, user)
					} else {
						return done(null, false)
					}
				})
			}
		}
	})

	Users.prototype.comparePassword = function(candidatePassword, cb) {
		bcrypt.compare(candidatePassword, this.getDataValue('password'), function (err, isMatch) {
			if (err) {
				cb(err, false);
			} else {
				cb(null, isMatch);
			}
		});
	}

	return Users
}
