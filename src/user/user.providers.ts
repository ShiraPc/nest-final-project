import { Connection } from 'mongoose';
import { userSchema } from 'src/schemas/user.schema';

export const usersProviders = [
  {
    provide: userSchema,
    useFactory: (connection: Connection) => connection.model('User', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];