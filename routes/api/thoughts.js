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
.put(addReactions)
    
router
.route('/:thought/:reactionId')



module.exports = router;