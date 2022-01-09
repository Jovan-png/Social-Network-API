const {Thought , User} = require('../models')

const ThoughtController = {

    getAllThought(req, res) {
        Thought.find({})
            .then(ThoughtData => res.json(ThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getThoughtById({params}, res){
        Thought.findOne({id: params.id})
        .populate({
          path: 'reactions',
          select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1})
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
          .then(UserData => {
              console.log(UserData)
            if (!UserData) {
              res.status(404).json({ message: 'no user found with this id' });
              return;
            }
            res.json(UserData);
          })
          .catch(err => res.json(err));
      },

    updateThought(){
        Thought.findByIdAndUpdate({_id: params.id }, body, {new: true })
        .then(ThoughtData=>{
            if (!ThoughtData) {
              res.status(404).json({ message: 'no user found with this id' });
              return;
            }
            res.json(ThoughtData)
        })
        .catch(err =>{
            res.json(err)
        })
    }, 

    deleteThought({params}, res){
        Thought.findByIdAndDelete({_id: params.thoughtId})
        .then(deletedThought=>{
            if (!deletedThought) {
            res.status(404).json({ message: 'no thought found with this id' });
          }
          return 
        })
        .catch(err =>{
            res.json(err)
        })
    },
    addReactions({ params, body }, res) {
      Thought.findByIdAndUpdate(
          { _id: params.thoughtId },
          { $push: { reactions: body } },
          {  new: true, runValidators: true })
      .then(ThoughtData => {
          if (!ThoughtData) {
              res.status(404).json({
                  message: 'no thought found with this id'});
              return;
          }
          res.json(ThoughtData);
      })
      .catch(err => {
          console.log(err);
          res.status(400).json(err);
      });             
  },
  deleteReactions({ params}, res) {
      Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions:  params.id  } },
          { new: true })
      .then(ThoughtData => {
          if (!ThoughtData) {
              res.status(404).json({
                  message: 'no user found with this id'
              });
              return;
          }
          res.json(ThoughtData);
      })
      .catch(err => {
          console.log(err);
          res.status(400).json(err);
      });          
  }

}

module.exports = ThoughtController