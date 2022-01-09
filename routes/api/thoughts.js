const router = require('express').Router()


const  {  addReactions, deleteReactions,getAllThought, addThought, getThoughtById, updateThought, deleteThought} = require('../../controller/thought-controller')
    

router
.route('/')
.get(getAllThought)


router
.route('/:userId')
.post(addThought)

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)


router
.route('/:thoughtId/reactions')
.post(addReactions)
.delete(deleteReactions)


module.exports = router;