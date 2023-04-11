import mongoose from 'mongoose';

interface IUser {
  name?: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  image?: string;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

const User =
  (mongoose.models.User as mongoose.Model<
    IUser,
    {},
    {},
    {},
    mongoose.Document<unknown, {}, IUser> &
      Omit<
        IUser & {
          _id: mongoose.Types.ObjectId;
        },
        never
      >,
    any
  >) || mongoose.model<IUser>('User', userSchema);

export default User;
