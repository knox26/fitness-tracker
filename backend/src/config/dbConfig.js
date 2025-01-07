import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Database Connected Successfully");
    });
};

export default connectDb;
