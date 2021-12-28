const express = require('express')
const mongoose = require('mongoose')
const app = express()
const {User, Thought} = require('./models')
const PORT = process.env.PORT || 3001;

app.use(express.json)
app.use(express.urlencoded({extended: true}))



mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/social-network',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true)

app.use(require('./routes'))

app.get('/', (req, res)=>{
    console.log('lol')
})



app.listen(PORT, () =>{
    console.log(`Server is started on port ${PORT}`)
})