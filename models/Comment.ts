import mongoose, { Schema } from 'mongoose';

interface IComment {
  placeId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  content: string;
}
const commentSchema = new Schema<IComment>({
  placeId: { type: Schema.Types.ObjectId, required: true, ref: 'places' },
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
  content: { type: String, required: true },
});

const Comment =
  (mongoose.models.Comment as mongoose.Model<
    IComment,
    {},
    {},
    {},
    mongoose.Document<unknown, {}, IComment> &
      Omit<
        IComment & {
          _id: mongoose.Types.ObjectId;
        },
        never
      >,
    any
  >) || mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
