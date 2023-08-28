import mongoose from "mongoose";

export const ConnectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      "mongodb+srv://Enzoskr:Enzoagustin2001@clusterenzoskr.qzmjpif.mongodb.net/"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
