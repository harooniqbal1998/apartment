export interface ContactFormData {
	name: string;
	phone: string;
	comments?: string;
}

export interface ContactFormErrors {
	name?: string;
	phone?: string;
	comments?: string;
}
