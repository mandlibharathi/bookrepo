const mongoose =require('mongoose')

const bookSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    } ,
    description:{
        type:String,
        required:true
    },
    publicationyear:{
      type:String
    }
},
{timestamps:true}
)

const Books =mongoose.model("books",bookSchema)

module.exports=Books;