import { NextResponse } from "next/server";

// Temporary in-memory storage for queries
const queries: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, courseInterest } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Create query object
    const newQuery = {
      id: Date.now(),
      name,
      email,
      phone,
      message,
      courseInterest: courseInterest || "Not specified",
      timestamp: new Date().toISOString(),
    };

    // Store in memory (mock)
    queries.push(newQuery);
    
    console.log("New User Query Received:", newQuery);

    return NextResponse.json(
      { success: true, message: "Your query has been submitted successfully! We will contact you soon." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
