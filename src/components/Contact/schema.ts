import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

export const contactFormSchema = z.object({
	name: z.string().min(2, "Name is too short"),
	phone: z.string().refine((phone) => {
		const phoneNumber = parsePhoneNumberFromString(phone, {
			defaultCountry: "IN",
			extract: false,
		});
		return phoneNumber?.isValid() ?? false;
	}, "Invalid phone number"),
	comments: z.string().optional(),
});
