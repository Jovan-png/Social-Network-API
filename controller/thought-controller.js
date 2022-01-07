const {Thought, User} = require('../models')

const ThoughtController = {

    getAllThought(req, res) {
        Thought.find()
        .then(ThoughtData =>{
            res.json(ThoughtData)
            console.log(ThoughtData)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    getThoughtById({params}, res){
        Thought.findOne({id: params.id})
        .then(ThoughtData =>{
            res.json(ThoughtData)
        })
        .catch(err =>{
            res.json(err)
        })
    },

    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then(dbUserData => {
              console.log(dbUserData)
            if (!dbUserData) {
              res.status(404).json({ message: 'no user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

    updateThought(){
        Thought.findByIdAndUpdate({_id: params.id }, body, {new: true })
        .then(ThoughtData=>{
            res.json(ThoughtData)
        })
        .catch(err =>{
            res.json(err)
        })
    }, 

    deleteThought({params}, res){
        Thought.findByIdAndDelete({_id: params.id})
        .then(ThoughtData=>{
            res.json(ThoughtData)
        })
        .catch(err =>{
            res.json(err)
        })
    }

}

module.exports = ThoughtController