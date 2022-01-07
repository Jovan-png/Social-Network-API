const router = require('express').Router()


const  { getAllThought, addThought, getThoughtById, updateThought, deleteThought} = require('../../controller/thought-controller')
    

router
.route('/')
.get(getAllThought)

router
.route('/:userId')
.post(addThought)
    
router
.route('/:userId/:thoughtId')

.put(updateThought)
.delete(deleteThought)
    
    

module.exports = router;