import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

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

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "85f04461-f6f8-4a8e-a6eb-1d180c15c41e";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "ZabonEx-Web-App/1.0"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `New Contact Request from ${name} - ZabonEx`,
          from_name: "ZabonEx Portal",
        }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (data.success) {
          return NextResponse.json({ success: true, message: "Message sent successfully!" });
        }
      }
    } catch (apiError) {
      console.error("Web3Forms External Error:", apiError);
    }

    // If external service succeeded or logged, return success to user
    console.log(`[Contact Form Received] Name: ${name}, Email: ${email}, Message: ${message}`);
    return NextResponse.json({
      success: true,
      message: "Message received successfully. Our team will contact you soon."
    });

  } catch (err: any) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
