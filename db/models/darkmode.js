import mongoose from "mongoose";

const { Schema } = mongoose;

const darkmodeSchema = new Schema({
  darkmode: { type: Boolean },
});

const Darkmode = mongoose.models.User || mongoose.model("User", darkmodeSchema);

export default Darkmode;
