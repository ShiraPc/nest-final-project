import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { userSchema } from 'src/schemas/user.schema';


@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
