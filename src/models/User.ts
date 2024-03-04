import { Document, Schema, model, models } from "mongoose";

export interface User extends Document {
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

export default models.User || model<User>("User", UserSchema);
