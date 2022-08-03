import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [AuthModule, DatabaseModule,UserModule],

})

// MongooseModule.forRoot('mongodb://localhost:27017/finalProjectDB')
export class AppModule { 
  
}
