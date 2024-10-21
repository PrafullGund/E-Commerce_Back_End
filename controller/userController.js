const userService=require('../service/userService');

const createUserController = (req, res) => {
    const userData = req.body;

    if (userData.password !== userData.confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    userService.createUserService(userData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(200).json({ success: true, message: 'User Added Successfully..!' });
        }
    });
};

const getAllUserController=(req,res)=>{
    userService.getAllUserService((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(201).json({success:true,data:result});
        }
    })
   
}

module.exports={
    createUserController,
    getAllUserController
}