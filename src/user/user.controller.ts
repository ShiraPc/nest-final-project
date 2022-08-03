
import { Body, Controller, Get, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { User, userSchema } from "src/schemas/user.schema";
import { UserService } from "./user.service";

@Controller('user')

export class UserController {

    constructor(private userService: UserService) {
    }

    @Post()
    createUser(@Body() newUser: User) {
        return this.userService.create(newUser);
    }
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    };

}



