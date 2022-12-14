
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User, userSchema } from 'src/schemas/user.schema';
import { userDTO } from 'src/DTO/user.dto';

@Injectable()
export class UserService {
  constructor(
   @Inject(userSchema) 
   private userSchema: Model<User>) {}

  async create(createUserDTO: userDTO): Promise<User> {
    const createdUser = new this.userSchema(createUserDTO);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userSchema.find().exec();
  }

}



