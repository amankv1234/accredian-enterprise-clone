import { NextResponse } from "next/server";
import { z } from "zod";

// Schema for validation
const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

// Temporary in-memory storage for mock
const leads: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validation = leadSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation failed", 
          errors: validation.error.format() 
        },
        { status: 400 }
      );
    }

    const { name, email } = validation.data;

    // Store data (mock)
    const newLead = {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };
    
    leads.push(newLead);
    
    console.log("New Lead Captured:", newLead);

    return NextResponse.json(
      { 
        success: true, 
        message: "Lead saved successfully", 
        lead: newLead 
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
