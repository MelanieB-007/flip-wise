import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
});

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);

export default Users;
