import User from "../Models/userModel.js";

export const create = async(req , res) => {
    try {
        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User Data not found"});
        }

        const savedData = await userData.save();
        res.status(200).json({msg: "user created successfully", savedData});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getAll = async(req, res) => {
    try {
        const userData = await User.find();

        if(!userData){
            return res.status(404).json({msg: "No Users found"});
        }
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getOne = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({msg: "No User Exists with Such ID"});
        }
        res.status(200).json({msg:" User Exists", user:  userExist});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const updateUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({msg: "No User Exists with Such ID"});
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({msg: "yayy!! user updated",updatedUser});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({msg: "No User Exists with such ID"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
}