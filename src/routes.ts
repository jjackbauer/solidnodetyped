import { request, response, Router } from "express";
import { CreateUserController } from "./useCases/createUser";

const router = Router()

router.post('/users',(request,response) =>
{
    return CreateUserController.handle(request, response);
})

export { router }