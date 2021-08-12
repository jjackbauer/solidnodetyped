import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { createUserController } from "./createUserController";
import { createUserUseCase } from "./createUserUseCase";
import { MongooseUserRepository } from "../../repositories/implementations/MoongoseUserRepository";

const mailTrapMailProvider = new MailTrapMailProvider()
const mongooseUserRepository = new MongooseUserRepository()
const CreateUserUseCase = new createUserUseCase(
    mongooseUserRepository,
    mailTrapMailProvider,
)
const CreateUserController = new createUserController(
    CreateUserUseCase
)

export {CreateUserUseCase, CreateUserController}