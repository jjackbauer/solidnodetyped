import { User } from "../../entities/User";
import { IlistUsersDTO } from "../../useCases/listUsers/listUsersDTO";
import { IUserRepository } from "../IUserRepository";

export class MockUserRepository implements IUserRepository
{
   
    private users: User[] = [];
    async findByEmail(email: string): Promise<User> 
    {
        const user = this.users.find(user => user.email === email);

        return user;
    }
    async save(user: User): Promise<void> 
    {
       this.users.push(user);
    }
    async getAllUsers(): Promise<IlistUsersDTO[]>
    {
        var usersDTO: IlistUsersDTO[] = []

        for(var user of this.users)
            usersDTO.push({
                name: user.name,
                email: user.email,
                id: user.id
            })
        
        return usersDTO;
       
    }
    
}