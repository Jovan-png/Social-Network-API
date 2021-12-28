const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)


router.use('/', (req, res)=>{
    console.log('working')
    res.send('Hello')
})

module.exports = router;