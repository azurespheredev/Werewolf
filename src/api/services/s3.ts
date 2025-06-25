import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as dotenv from "dotenv";
import * as path from "path";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

export const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadFileToS3 = async (
  pathName: string,
  file?: Express.Multer.File,
  buffer?: Buffer,
  extension?: string,
  mimetype?: string
): Promise<{
  success: boolean;
  url?: string;
  error?: string;
}> => {
  try {
    const fileExt = file ? path.extname(file.originalname) : extension;
    const fileKey = `${pathName}/${uuidv4()}${fileExt}`;
    const fileBuffer = file ? file.buffer : buffer;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: fileKey,
      Body: fileBuffer,
      ContentType: file ? file.mimetype : mimetype,
    });

    await s3.send(command);
    const fileUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;

    return {
      success: true,
      url: fileUrl,
    };
  } catch (error) {
    void error;

    return {
      success: false,
      error:
        "Failed to upload the document to the S3 bucket. Please try again later.",
    };
  }
};
