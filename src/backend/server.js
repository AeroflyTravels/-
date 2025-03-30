import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Route to handle form submissions
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mysky.del@outlook.com", // Change this to your preferred email
      subject: subject || "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send message. Try again later." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
