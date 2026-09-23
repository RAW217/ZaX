import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    const resendApiKeyInquiries = process.env.RESEND_API_KEY || "re_8wqGuGWU_98fY14shS9KuxQcmPGzAdMn5";
    const resendApiKeyGmail = process.env.RESEND_API_KEY_GMAIL || "re_38CRvm5J_Ps4XZGMfkr7dc9cvkwQW6W2j";

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #BFDCF0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(10, 114, 196, 0.08);">
        <div style="background-color: #0A72C4; padding: 24px 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">ZabonEx | New Contact Inquiry</h1>
        </div>
        
        <div style="padding: 32px; color: #0C3D5E;">
          <p style="font-size: 15px; margin-top: 0; margin-bottom: 24px; color: #4E8CB8;">
            You received a new inquiry from the ZabonEx website contact form:
          </p>

          <div style="background-color: #F4FAFD; border: 1px solid #D2E9F9; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #0C3D5E; width: 100px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0; color: #1E293B;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #0C3D5E; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0A72C4; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #0C3D5E; vertical-align: top;">Phone:</td>
                <td style="padding: 8px 0; color: #1E293B;"><a href="tel:${phone}" style="color: #0A72C4; text-decoration: none; font-weight: 500;">${phone}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #0C3D5E; vertical-align: top;">Date:</td>
                <td style="padding: 8px 0; color: #64748B;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #4E8CB8; margin-bottom: 8px;">Message Content</h3>
            <div style="background-color: #ffffff; border-left: 4px solid #0A72C4; border-top: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; padding: 16px 20px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; color: #0C3D5E; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="text-align: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #0A72C4; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 28px; border-radius: 9999px; font-size: 14px;">
              Reply to ${name}
            </a>
          </div>
        </div>

        <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px; text-align: center; font-size: 12px; color: #94A3B8;">
          This notification was generated automatically from the ZabonEx Website Contact Form.
        </div>
      </div>
    `;

    // Send to inquiries@zabonex.com using the new key
    const sendInquiries = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKeyInquiries}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ZabonEx Contact <onboarding@resend.dev>",
        to: ["inquiries@zabonex.com"],
        reply_to: email,
        subject: `New Contact Request from ${name} - ZabonEx`,
        html: emailHtml,
      })
    });

    // Also send copy to hosnhosn2002@gmail.com
    const sendGmail = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKeyGmail}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ZabonEx Contact <onboarding@resend.dev>",
        to: ["hosnhosn2002@gmail.com"],
        reply_to: email,
        subject: `New Contact Request from ${name} - ZabonEx`,
        html: emailHtml,
      })
    });

    const [inquiriesRes, gmailRes] = await Promise.allSettled([sendInquiries, sendGmail]);

    let success = false;
    if (inquiriesRes.status === "fulfilled" && inquiriesRes.value.ok) {
      success = true;
    }
    if (gmailRes.status === "fulfilled" && gmailRes.value.ok) {
      success = true;
    }

    if (success) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!"
      });
    } else {
      const errData = inquiriesRes.status === "fulfilled" ? await inquiriesRes.value.json() : null;
      console.error("Resend API Delivery Error:", errData);
      return NextResponse.json(
        { success: false, message: errData?.message || "Failed to send email." },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
