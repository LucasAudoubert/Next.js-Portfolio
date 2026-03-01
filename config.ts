import dotenv from "dotenv";

dotenv.config();

export const config = {
  databaseName: process.env.DATABASE_NAME || "",
  jwtSecret: process.env.JWT_SECRET || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
};
