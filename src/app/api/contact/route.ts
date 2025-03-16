import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Specify the service as 'gmail'
      host: 'smtp.gmail.com',
      port: 587,  // Use port 587 for TLS
      secure: false,  // Set this to false for TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false  // Only use this in development if needed
      }
    });

    // Email content
    const mailOptions = {
      to: "m.usman21058@gmail.com", // Your email where you want to receive messages
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      // Send email
      const result = await transporter.sendMail(mailOptions);
      console.log(result);

      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
