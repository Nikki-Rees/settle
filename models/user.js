const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        require: true
    },

    email: {
        type: String,
        unique: true,
        require: true
    }

});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;