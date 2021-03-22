const User = require('../schema/userSchema');

//To GetAll UserDetails
const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
}


//To post 
const UserDetails = async (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    })
}

//To Find a Particular User
const getParticularUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}

//To update
const UpdateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    res.json({ updated: user });
}



//Delete

const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ deleted: user });
}


module.exports = { getAllUsers, UserDetails, getParticularUser, UpdateUser, deleteUser };
