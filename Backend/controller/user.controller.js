import User from "../models/user.model.js"
export const signup =(req, res) => {
    const { fullname, email, password,confirmPassword } = req.body;
    try {
        if(password!==confirmPassword) {
            return res.status(403).json({error: 'Invalid password'});
        }
        const user = User.findOne({email})
        if(user){
            return res.status(403).json({error: 'Email already exists'});
        }
        const newUser = new User({fullname, email, password});
        newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    }catch(error) {
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
}

