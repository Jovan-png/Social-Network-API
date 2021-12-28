const {Schema, model, Types} = require('mongoose')


const ReactionSchema = new Schema({
    reaction:{
        type: Types.ObjectId,
        default: new Types.ObjectId
    },
    reactionBody:{
        type: String,
        required: true,
        max: 280
    },
    username:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const ThoughtSchema = new Schema ({
    thoughtText:{
        type: String,
        required: true,
        min: 1,
        max: 128
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username:{
        type: String,
        required: true,
    },
    reactions:[ReactionSchema]
},
{
toJSON:{
    virtuals: true
}
})

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;