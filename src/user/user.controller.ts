import { Controller, Get, Post } from "@nestjs/common";
import { User, userSchema } from "src/schemas/user.schema";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post()
    createUser(newUser: User) {
        return this.userService.create(newUser);
    }
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    };

}


