import { listUsersUseCase } from "./listUsersUseCase";
import { listUsersController } from "./listUsersController";
import { MongooseUserRepository } from "../../repositories/implementations/MoongoseUserRepository";
const mongooseUserRepository = new MongooseUserRepository()
const ListUsersUseCase = new listUsersUseCase(
    mongooseUserRepository
)
const ListUsersController = new listUsersController(
    ListUsersUseCase
)

export {ListUsersUseCase, ListUsersController}