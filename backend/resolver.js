import { users, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";
import UserModel from "./models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "./config.js";
const resolvers = {
    Query: {
        users: () => users,
        quotes: () => quotes,
        user: (_, args) => {
            return users.find(user => user._id == args._id)
        },
        quote: (_, args) => quotes.filter(q => q.by == args.by)
    },
    User: {
        quotes: (ur) => quotes.filter(quote => quote.by == ur._id)
    },

    Mutation: {
        signupUser: async (_, { userNew }) => {
            const findExistingUser = await UserModel.findOne({ email: userNew.email })
            if (findExistingUser) {
                throw new Error("User already exists")
            }

            const hashedPassword = await bcryptjs.hash(userNew.password, 10)
            const AddUser = new UserModel({ ...userNew, password: hashedPassword })
            return await AddUser.save()

        },
        signinUser: async (_, { userSignin }) => {
            const findUser = await UserModel.findOne({ email: userSignin.email })
            if (!findUser) {
                throw new Error("User not found")
            }
            const isMatchPass = await bcryptjs.compare(userSignin.password, findUser.password)
            if (!isMatchPass) {
                throw new Error("Invalid Password")
            }
            const token = jwt.sign({ _id: findUser._id, name: findUser.name, email: findUser.email }, SECRET_KEY, { expiresIn: "1d" })
            return { token };
        }
    },



};

export default resolvers;