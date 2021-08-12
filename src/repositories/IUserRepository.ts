import { User } from "../entities/User";
import { IlistUsersDTO } from "../useCases/listUsers/listUsersDTO";

export interface IUserRepository
{
    getAllUsers():Promise<IlistUsersDTO[]>;
    findByEmail(email : string): Promise<User>;
    save(user: User): Promise<void>;
}