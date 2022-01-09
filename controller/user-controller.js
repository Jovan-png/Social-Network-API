const {User, Thought} = require('../models')

const userController = {

    getAllUser(req, res) {
        User.find({})
        .then(UserData =>{
            res.json(UserData)
        
        })
        .catch(err =>{
            res.json(err)
        })
    },

    getUserById({params}, res){
        User.findOne({id: params.id})
        .populate({
            path: 'thoughts',
            path: 'friends',
            select: '-__v'
          })
          .select('-__v')
        .then(UserData =>{
            if(!UserData){
                res.status().json({message: ' no user found with this id'})
                return
            }
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

    updateUser({params, body}, res){
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
            if(!UserData){
                res.status().json({message: ' no user found with this id'})
                return
            }
            res.json(UserData)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    addFriends({ params, body }, res) {
        User.findOneAndUpdate(
          { _id: params.id },
          { $push: { friends: params.id } },
          { new: true, runValidators: true }
        )
        .select('-__v')
          .then(UserData => {
            if (!UserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(UserData);
          })
          .catch(err => res.json(err));
      },

      
      removeFriends({params}, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: {friendId:  params.friendId  } } },
            {new: true}
            )
        .then(UserData => {
            res.json(UserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });          
    }
};



module.exports = userController