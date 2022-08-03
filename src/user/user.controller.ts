import { Controller, Get, Post } from "@nestjs/common";
import { User, userSchema } from "src/schemas/user.schema";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    UserModel: any;
    constructor(private userService:UserService){
        // this.authService.test()
    }

    @Post()
    createUser(newUser:User){
        userSchema.add(newUser);
        return {newUser};
    }
    @Get()
    getAllUsers(){  
        const results = findAllUsers();
        return results;
    };
    

    @Get()
    getUser(id:string){
        userSchema.get(id);
        //  users.forEach(element => {       
        //  });
      
      }
}


