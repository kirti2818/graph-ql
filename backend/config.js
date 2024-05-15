
const db_url = 'mongodb+srv://kirti2818:kirti2818@cluster0.b7pelc8.mongodb.net/graphql'
export const SECRET_KEY = "kirti123"

import mongoose from "mongoose";

const connect = async()=>{
    return await mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});
}

export default connect;