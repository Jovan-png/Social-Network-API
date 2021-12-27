const {Schema, model} = require('mongoose')

const User = new Schema({
username:{
    type: String,
    unique: true,
    required: true,
    trim: true
},
email:{
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email adress']
},
thoughts:[{
    
}]
})





module.exports= User;