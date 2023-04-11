import mongoose, { Schema } from 'mongoose';

interface IToken {
  userId: Schema.Types.ObjectId;
  token: string;
  createdAt: Date;
}
const tokenSchema = new Schema<IToken>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // Exprire in 5 mins
});

const Token =
  (mongoose.models.Token as mongoose.Model<
    IToken,
    {},
    {},
    {},
    mongoose.Document<unknown, {}, IToken> &
      Omit<
        IToken & {
          _id: mongoose.Types.ObjectId;
        },
        never
      >,
    any
  >) || mongoose.model<IToken>('Token', tokenSchema);

export default Token;
