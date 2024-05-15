import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

const UserModel = mongoose.model('User', UserShema);
export default UserModel;