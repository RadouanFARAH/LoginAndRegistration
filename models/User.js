const mongoose =require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName: {
        type : String,
        default: ''
    },
    lastName: {
        type : String,
        default: ''

    },
    email: {
        type :String,
        required :true
    },
    password: {
        type : String,
        required : true
    },
})
const User = mongoose.model('User', UserSchema)

module.exports= User;