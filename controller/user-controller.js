const {User} = require('../models')

const userController = {

    getAllUser(req, res) {
        User.find()
        .then(UserData =>{
            res.json(UserData)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    getUserById({params}, res){
        User.findOne({id: params.id})
        .then(UserData =>{
            res.json(UserData)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    createUser({body}, res){
        User.create(body)
        .then(UserData =>{
            res.json(UserData)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    updateUser(){
        User.findByIdAndUpdate({_id: params.id }, body, {new: true })
        .then(UserData=>{
            res.json(UserData)
        })
        .catch(err =>{
            res.json(err)
        })
    }, 

    deleteUser({params}, res){
        User.findByIdAndDelete({_id: params.id})
        .then(UserData=>{
            res.json(UserData)
        })
        .catch(err =>{
            res.json(err)
        })
    }

}

module.exports = userController