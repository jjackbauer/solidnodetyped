import {Schema, model, Document} from "mongoose"
import { User } from "../../entities/User"
import { IUserRepository } from "../IUserRepository"
import mongoose from "mongoose"

export interface IUserSchema extends Document
{
    id: string,
    name: string,
    password: string,
    email: string,
}

const  userSchema = new Schema
({
    id:String,
    name:String,
    email:String,
    password:String

},
{
    timestamps: true
}
)

const Model = model<IUserSchema>('User', userSchema) 

export class MongooseUserRepository implements IUserRepository
{
    constructor()
    {
        mongoose.connect('mongodb://localhost:27017/solidnodetyped', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    async findByEmail(email: string): Promise<User> 
    {
        const user = await Model.findOne({'email': email});
        var output = null
            if(user)
                output = new User(user);
        
        return output;
    }
    async save(user: User): Promise<void>
    {
        const userCreated = await Model.create(user);

        if(!userCreated)
            throw new Error('Unable to save new user');
        
    }
    
}