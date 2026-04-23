import File from "../models/fileModel.js";
import uploadToS3 from "../services/s3Service.js"; 

export const uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const result = await uploadToS3(file, "medical");

    const savedFile = await File.create({
      fileName: file.originalname,
      fileUrl: result.Location,
    });

    res
      .status(201)
      .json({ message: "File uploaded successfully", data: savedFile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Upload Failed" });
  }
};

export const getFiles = async (req, res) => {
  try {
    const files = await File.find();

    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Error fetching files" });
  }
};
