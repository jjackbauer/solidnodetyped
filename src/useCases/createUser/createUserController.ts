import { Request, Response } from "express";
import { createUserUseCase } from "./createUserUseCase";

export class createUserController
{
    constructor(private service: createUserUseCase){  }
    async handle(request: Request, response: Response): Promise<Response>
    {
        const { name, email, password } = request.body;

        try
        {
            await this.service.execute({
                name,
                email,
                password
            })

            response.status(201).send();
        }
        catch(err)
        {
            return response.status(400).json({
                message: err.message || 'Unexpected Error.'
            })
        }
    }
}