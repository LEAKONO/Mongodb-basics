const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String
        , 
        required:
        true
    },

    age:Number
})
module.exports=mongoose.model(UserSchema,'User')