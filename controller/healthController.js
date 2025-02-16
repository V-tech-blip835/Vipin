import HealthActivity from "../models/HealthActivity.js";
createActivity=async (req,res)=>{
	try{
		const {userId,activityType,description,duration,calories}=req.body;
		const activity=await HealthActivity.create({userId,activityType,description,duration,calories});
		res.status(201).json({success:true,activity});
	}catch(error){
		res.status(400).json({success:false,message:error.message})
	}
};

getActivity=async (req,res)=>{
	
		try{
			const activity=await HealthActivity.findById(req.param.id);
			if(!activity){
				return res.status(404).json({success:false,message:"acitivity not found"});
			}
			res.status(200).json({success:true,activity});
		}catch(error){
			res.status(400).json({success:false,message:error.message});
		}
	};
updateActivity=async (req,res)=>{
	try{
			const {userId,activityType,description,duration,calories}=req.body;
		const activity= await HealthActivity.findByIdAndUpdate(req.param.id,{userId,activityType,description,duration,calories},{new:true});
		if(!activity){
				return res.status(404).json({success:false,message:"acitivity not found"});
			}
			res.status(200).json({success:true,activity});
		}catch(error){
			res.status(400).json({success:false,message:error.message});
		}
	};
deleteActivity=async (req,res)=>{
	try{
		const activity=await HealthActivity.findByIdAndDelete(req.param.id);
		if(!activity){
				return res.status(404).json({success:false,message:"acitivity not found"});
			}
			res.status(200).json({success:true,message:"activity deleted succesfully"});
		}catch(error){
			res.status(400).json({success:false,message:error.message});
		}
	};
	
export {createActivity,getActivity,updateActivity,deleteActivity};
	
