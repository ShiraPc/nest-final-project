import { Get, Injectable, Post } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from "src/schemas/user.schema";

@Injectable({})
export class UserService{
      [x: string]: any;
      async create(createUser: User): Promise<User> {
        const createdUser = new this.catModel(createUser);
        return createdUser.save();
      }

      async findAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
      }
}



