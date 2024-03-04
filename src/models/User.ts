import { Document, Model, Schema, model, models } from "mongoose";

interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  externalId: string;
}

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  externalId: {
    type: String,
    required: true,
  },
});

const userModel: Model<User> = models?.User || model<User>("User", UserSchema);

export default userModel;
