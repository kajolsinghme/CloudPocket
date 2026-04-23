import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    fileUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

const File = mongoose.model("File", fileSchema);

export default File;
