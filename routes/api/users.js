const router = require('express').Router()

const User = require('../../models/User')



router.get('/',(req, res) =>{
    User.find()
    .then(UserData =>{
        res.json(UserData)
        console.log(UserData)
    })
    .catch(err =>{
        console.log(err)
    })
})




router.get('/',(req, res) =>{
res.send('Hello')
})






module.exports = router