import {Schema, model, Document} from "mongoose"
import { User } from "../../entities/User"
import { IUserRepository } from "../IUserRepository"
import mongoose from "mongoose"
import { IlistUsersDTO } from "../../useCases/listUsers/listUsersDTO"

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
    async getAllUsers(): Promise<IlistUsersDTO[]>
    {
        const users = await Model.find();
        
        console.log(users)
        
        var usersDTO: IlistUsersDTO[] = []

        for (var user of users)        
            usersDTO.push({
                name: user.name,
                email: user.email,
                id: user._id
            });

        console.log(usersDTO);

        return usersDTO;
        
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