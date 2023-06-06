// FSJS2.0 9th feb-mega project

import asyncHandler from "../service/asyncHandler.js";
import User from "../modules/userSchema.js";
import CustomError from "../utils/CustomError.js";

export const cookieOptions={
    expires : new Date(Date.now()+ 3* 24 * 60 * 60 * 1000),
    httpOnly: true
}


// Controller for sign-up/registration

export const signUp= asyncHandler(async (req,res)=>{

    //collect user details
    const {name, email, password}=req.body;

    // verify recived values
    if (!name || !email || !password){
        throw new CustomError("Please enter All required fields", 400);
    }

    // Check if user already exist's
    const userExistance=await User.findOne({email})

    if (userExistance){
        throw new CustomError("User Already exists", 403)
    }
    // created new entry in DATABASE && db will return all entrys after completion
    const user = await User.create({
        name,
        email,
        password
    });

    user.password=undefined;
    //generate JWT token 

    const token = user.getJwtToken();

    res.cookie("token",token, cookieOptions)

    // Sending Back Responce to user, with selected fields only
    res.status(200).json({
        success :true,
        token,
        name
    })
})

// Controller for Login user

export const logIn= asyncHandler(async (req, res)=>{
    // colect credentials 
    const {email, password }= req.body;
    
    // validation
    if (!email || !password){
        throw new CustomError("Please enter Credentials");
    }
    
    // Checking if email Matches
    const user =await User.findOne({email}).select("+password")
    
    if (!user?.email){
        throw new CustomError("User not found, please signUp!! ", 400)
    }
    
    const passMatches=await user.comparePassword(password)
    if (passMatches){
        const token =await user.getJwtToken();
        user.password=undefined

        // Sending Back Responce to user, with selected fields only
        res.cookie("token",token, cookieOptions)

        return res.status(200).json({
            success :true,
            token,
            user
        })
    }
    throw new CustomError("Password is Incorrect", 400);
} )


// Logout user
export const logout=asyncHandler(async (req, res,)=>{
    res.cookie("token",null ,{
        expires : new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: "Log Out Sucessful"
    })
})

// getProfile controller will/should be exicuted after "isLogedIn" middleware

export const getProfile=asyncHandler(async (req,res)=>{
    // user is a field added in isLoggedIn middleware
    const {user}=req
    
    if(!user){
        throw new CustomError("User doesn't exist's",404)
    }
    res.status(200).json({
        success: true,
        user
    })
})


// To delete User account Email and password both should be matched
export const deleteUser= asyncHandler(async (req, res)=>{
    // colect credentials 
    const {email, password }= req.body;
    
    // validation
    if (!email || !password){
        throw new CustomError("Please enter Credentials");
    }
    
    // Checking if email Matches
    const user =await User.findOne({email}).select("+password")
    
    if (!user?.email){
        throw new CustomError("User not found", 404)
    }
    
    const passMatches=await user.comparePassword(password)
    if (!passMatches){
        throw new CustomError("Invalid credentials, request denied", 403);

    }
    
    const deleted =await User.findOneAndDelete({email})
    if (!deleted){
        throw new CustomError("Unable to delete user account, try again")
    }
    return res.status(200).json({
        success :true,
        message: "User account deleted succesfully"
    })
} )