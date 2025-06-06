// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/components/Contact/schema";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const validatedData = contactFormSchema.parse(body);

		await sendContactEmail(validatedData);

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error(err);
		if (err instanceof Error) {
			return NextResponse.json(
				{ success: false, error: err.message },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ success: false, error: "Internal server error" },
			{ status: 500 }
		);
	}
}
