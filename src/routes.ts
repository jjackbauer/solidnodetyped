import { request, response, Router } from "express";
import { CreateUserController } from "./useCases/createUser";
import { ListUsersController } from "./useCases/listUsers";

const router = Router()

router.post('/users',(request,response) =>
{
    return CreateUserController.handle(request, response);
})
router.get('/users', (request, response) =>
{
    return ListUsersController.handle(request,response);
})

export { router }