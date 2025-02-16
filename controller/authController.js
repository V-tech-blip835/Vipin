import User from "../models/User";
 const signup=async (req,res)=>{
try{
	const {username,email,password}=req.body;
	const user=await User.create({username,email,password});
	
	res.status(201).json({success:true,user});
}
	catch(error){
		res.status(400).json({success:false,message:error.message});
	}
};


 const login=async (req,res)=>{
	try{
		const{email,password}=req.body;
		const user=await User.findOne({email});
		if(!user){
			return res.status(404).json({success:false,message:"User not found"});
		}
		if(user.password!==password){
			return res.status(401).json({success:false,message:"incorrect password"});
		}
		res.status(200).json({success:true,message:"login successful"});
	}
	catch(error){
		res.status(400).json({success:false,message:error.message})
	}
};
export {signup,login};