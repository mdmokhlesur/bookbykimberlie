import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 },
      );
    }

    // 2. Transporter Setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD, // Google App Password
      },
    });

    // 3. Email Content
    const mailOptions = {
      from: `"${name}" <${process.env.NEXT_PUBLIC_EMAIL}>`,
      replyTo: email,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL || "kimberlie@booksbykimberlie.com",
      subject: `New Inquiry: ${name} — Books by Kimberlie`,
      text: `New message from ${name} (${email}):\n\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .container { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f0f0f0; border-radius: 12px; overflow: hidden; }
              .header { background-color: #ffffff; padding: 40px 20px; text-align: center; border-bottom: 1px solid #f8f8f8; }
              .logo-text { font-size: 24px; font-weight: bold; color: #8E4D64; letter-spacing: 2px; text-transform: uppercase; }
              .content { padding: 40px; color: #333333; line-height: 1.6; }
              .title { font-size: 20px; font-weight: 500; color: #1a1a1a; margin-bottom: 30px; border-left: 4px solid #C96C74; padding-left: 15px; }
              .field { margin-bottom: 25px; }
              .label { font-size: 11px; font-weight: bold; color: #999999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
              .value { font-size: 16px; color: #333333; }
              .message-box { background-color: #fcfcfc; border: 1px solid #f5f5f5; padding: 25px; border-radius: 8px; font-style: italic; color: #555555; }
              .footer { background-color: #fafafa; padding: 25px; text-align: center; font-size: 12px; color: #aaaaaa; }
              .footer a { color: #C96C74; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo-text">Books by Kimberlie</div>
                <div style="font-size: 12px; color: #C96C74; margin-top: 5px; letter-spacing: 1px;">EXPERT BOOKKEEPING</div>
              </div>
              <div class="content">
                <div class="title">New Website Inquiry</div>
                
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Message Details</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was sent from the official <strong>Books by Kimberlie</strong> website.</p>
                <p>&copy; 2026 Books by Kimberlie. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
