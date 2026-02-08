import { NextResponse } from "next/server";
import { LeadSchema } from "@/lib/validators";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues?.[0]?.message ?? "Invalid form data." },
        { status: 400 }
      );
    }

    const lead = parsed.data;

    const { error } = await supabaseAdmin.from("leads").insert({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company || null,
      inquiry_type: lead.inquiryType,
      message: lead.message,
      source_page: lead.sourcePage || null,
      status: "new",
    });

    if (error) {
      return NextResponse.json(
        { error: "Database error. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
