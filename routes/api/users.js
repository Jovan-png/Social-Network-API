const router = require('express').Router()

const { addFriends, removeFriends, getAllUser, createUser, getUserById,  updateUser, deleteUser } = require('../../controller/user-controller')

router
.route('/')
.get(getAllUser)
.post(createUser)


router
.route('/:id')
.put(updateUser)
.delete(deleteUser)
.get(getUserById)


router
.route('/:id/friends/:friendsId')
.post(addFriends)
.delete(removeFriends)



module.exports = router