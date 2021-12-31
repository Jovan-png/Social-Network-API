const {Thought} = require('../models')

const ThoughtController = {

    getAllThought(req, res) {
        Thought.find()
        .then(ThoughtData =>{
            res.json(ThoughtData)
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

    createThought({body}, res){
        Thought.create(body)
        .then(ThoughtData =>{
            res.json(ThoughtData)
        })
        .catch(err =>{
            res.json(err)
        })
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