import nodemailer from "nodemailer";
import { ContactFormData } from "../types";

export async function sendContactEmail(formData: ContactFormData) {
	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		},
	});

	return transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: process.env.GMAIL_USER,
		subject: `Contact from ${formData.name}`,
		text: `Name: ${formData.name}\nPhone: ${formData.phone}\nComments: ${
			formData.comments || "No comments provided"
		}`,
	});
}
