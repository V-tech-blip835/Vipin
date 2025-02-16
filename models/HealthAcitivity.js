import mongoose from "mongoose";
const healthActivitySchema= new mongoose.Schema({
	userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,},
	activityType:{type:String,enum:["excercise","meal","water intake","sleep"],required:true,},
	description:{type:String,required:true,},
	duration:{type:Number,},
	calories:{type:Number,},
	createdAt:{type:Date,default:Date.now,},
});
const HealthActivity=mongoose.model("healthActivity",healthActivitySchema);
export default HealthActivity;