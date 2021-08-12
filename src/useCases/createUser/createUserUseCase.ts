import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./createUserDTO";

export class createUserUseCase
{
    constructor(private userRepository : IUserRepository, private mailProvider : IMailProvider) {}

    async execute (data : ICreateUserRequestDTO)
    {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)
        
        if(userAlreadyExists)
            throw new Error('User Already Exists');
        
        const user = new User(data);

        await this.userRepository.save(user);

        await this. mailProvider.sendmail({
            to:{
                name: data.name,
                email: data.email,
            },
            from:{
                name: 'SOLID NODE TYPED TEAM',
                email: 'team@solidnodetyped.com',
            },
            subject: 'Welcom to solid node typed team',
            body: ' <p>You can already login on our plataform</p>',
        })
        
    }
}