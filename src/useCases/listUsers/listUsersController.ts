import { Request, Response } from "express";
import { IlistUsersDTO } from "./listUsersDTO";
import { listUsersUseCase } from "./listUsersUseCase";

export class listUsersController
{
    constructor(private service: listUsersUseCase){}
    async handle(request: Request,response: Response): Promise<Response<IlistUsersDTO>>
    {
        try
        {
            const users = await this.service.execute();
            return response.status(200).send(users);
        }
        catch(err)
        {
            return response.status(404).json({
                message: err.message || 'Unexpected Error.'
            })
        }
    }
}
