import User from "../model/userModel.js";

export const create=async(req,res)=>{
    try{
        const userData=new User(req.body);

        if(!userData){
            return res.status(404).json({msg:"User data not found"})
        }
        const savedData=await userData.save();

        res.status(200).json(savedData);
    }
    catch(error){
        res.status(500).json({error:error})
    }
}

export const getAll=async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({msg:"user data not found"});
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getone=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExis=await User.findById(id);
        if(!userExis){
            return res.status(404).json({msg:"user not found"})
        }
        res.status(200).json(userExis);
    }
    catch(error){
      res.status(500).json({error:error})
    }
}

export const update=async(req,res)=>{
    try{
   const id= req.params.id;
   const userExist=await User.findById(id);
   if(!userExist){
    return res.status(401).json({msg:"User not found"});
   }
     const updateData=await User.findByIdAndUpdate(id,req.body,{new:true});
     res.status(200).json({updateData});
      
    }
    catch (error){
        console.log(error);
    }
}
export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User not found"});

        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"user deleted succusfully"});
    } catch (error) {
       res.status(500).json({error:error}); 
    }
}