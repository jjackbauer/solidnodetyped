import { IUserRepository } from "../../repositories/IUserRepository";
import { IlistUsersDTO } from "./listUsersDTO";

export class listUsersUseCase
{
    constructor(private repository: IUserRepository){}
    async execute(): Promise<IlistUsersDTO[]>
    {
        return await this.repository.getAllUsers();
    }
}