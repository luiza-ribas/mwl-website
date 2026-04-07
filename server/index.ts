import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Email helper function
async function sendInquiryEmail(inquiry: Record<string, unknown>): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const cinthiaEmail = process.env.CINTHIA_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPass || !cinthiaEmail) {
    console.warn("SMTP credentials not fully configured. Skipping email notification.");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || "587"),
      secure: smtpPort === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailBody = `
New Catering Inquiry Received!

Customer Information:
- Name: ${inquiry.name}
- Email: ${inquiry.email}
- Phone: ${inquiry.phone}

Event Details:
- Event Type: ${inquiry.eventType}
- Date: ${inquiry.eventDate}
- Number of Guests: ${inquiry.guestCount}
- Budget: ${inquiry.budget || "Not specified"}

Special Requirements:
- Dietary Restrictions: ${inquiry.dietaryRequirements || "None"}
- Special Requests: ${inquiry.specialRequests || "None"}

Submitted: ${inquiry.submittedAt}

Please respond to the customer to discuss their catering needs.
    `;

    const info = await transporter.sendMail({
      from: smtpFrom || smtpUser,
      to: cinthiaEmail,
      subject: `New Catering Inquiry from ${inquiry.name}`,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`,
    });

    console.log(`Email sent with ID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// Twilio WhatsApp helper function
async function sendWhatsAppMessage(message: string): Promise<boolean> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_WHATSAPP_FROM;
  const toNumber = process.env.TWILIO_WHATSAPP_TO;

  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    console.warn("Twilio credentials not configured. Skipping WhatsApp notification.");
    return false;
  }

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          From: fromNumber,
          To: toNumber,
          Body: message,
        }).toString(),
      }
    );

    const data = await response.json() as { sid?: string; error_code?: number };
    if (response.ok && data.sid) {
      console.log(`WhatsApp message sent with SID: ${data.sid}`);
      return true;
    } else {
      console.error("Failed to send WhatsApp message:", data);
      return false;
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return false;
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  const inquiriesPath = path.resolve(__dirname, "inquiries");
  if (!fs.existsSync(inquiriesPath)) {
    fs.mkdirSync(inquiriesPath, { recursive: true });
  }

  app.post("/api/catering-inquiry", async (req, res) => {
    const inquiry = req.body;

    if (
      !inquiry?.name ||
      !inquiry?.email ||
      !inquiry?.phone ||
      !inquiry?.eventType ||
      !inquiry?.eventDate ||
      !inquiry?.guestCount
    ) {
      return res.status(400).json({
        success: false,
        error: "Missing required inquiry fields.",
      });
    }

    const filename = `inquiry-${Date.now()}.json`;
    fs.writeFileSync(
      path.join(inquiriesPath, filename),
      JSON.stringify(inquiry, null, 2),
      "utf-8"
    );

    console.log(`Saved catering inquiry: ${filename}`);

    // Send WhatsApp notification
    const whatsappMessage = `New Catering Inquiry! 🎉\n\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nEvent: ${inquiry.eventType}\nDate: ${inquiry.eventDate}\nGuests: ${inquiry.guestCount}\nBudget: ${inquiry.budget || "Not specified"}\n\nDietary: ${inquiry.dietaryRequirements || "None"}\nSpecial Requests: ${inquiry.specialRequests || "None"}`;

    await sendWhatsAppMessage(whatsappMessage);
    
    // Send email notification
    await sendInquiryEmail(inquiry);

    return res.status(200).json({ success: true });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
