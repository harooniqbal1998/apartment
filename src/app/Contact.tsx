"use client";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

export default function Contact() {
    const formSchema = z.object({
        name: z.string().min(2, "Name is too short"),
        phone: z.string().transform((arg, crx) => {
            const phoneNumber = parsePhoneNumberFromString(arg, {
                defaultCountry: "IN",
                extract: false
            });

            if (phoneNumber && phoneNumber.isValid()) {
                return phoneNumber
            }

            crx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid phone number"
            });
            return z.NEVER
        }),
        comments: z.string().optional()
    })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comments: "",
  });
  const [status, setStatus] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const result = formSchema.safeParse(formData);

    if(!result.success) {
        const errorMsg = result.error.format();
        setFormErrors({
            name: errorMsg.name?._errors?.[0] ?? "",
            phone: errorMsg.phone?._errors?.[0] ?? "",
            comments: errorMsg.comments?._errors?.[0] ?? "",
          });
        return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setFormData({ name: "", phone: "", comments: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div
      className=" bg-primary min-h-screen flex flex-col items-center justify-center px-m md:px-0"
      id="contact"
    >
      <h1 className="font-bold text-background text-h4">Contact Us</h1>
      <p className="text-base text-background mb-l opacity-80">
        We will reach out to you in 48 hours
      </p>
      {/* need to add n more colors, hierarchy is not proper */}
      <form
        action="get"
        onSubmit={handleSubmit}
        className="flex flex-col gap-m text-background items-grow w-[400px] px-m md:px-0"
      >
        <label className="flex flex-col gap-s">
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="border border-1 border-gray-500 bg-gray2 rounded px-m py-s text-black"
            required
          />
          {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
        </label>
        <label className="flex flex-col gap-s">
          Phone:
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="border border-1 border-gray-500 rounded px-m py-s bg-gray2 text-black"
          />
          {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
        </label>
        <label className="flex flex-col gap-s">
          Comments:
          <textarea
            name="comments"
            id="comments"
            onChange={handleChange}
            value={formData.comments}
            className="border border-1 border-gray-500 rounded px-m py-s bg-gray2 text-black resize-none"
          ></textarea>
          {formErrors.comments && <p className="text-red-500 text-sm">{formErrors.comments}</p>}
        </label>
        <input
          type="submit"
          value="Submit"
          className="mx-auto bg-primary px-8 py-4 rounded-lg text-base text-background hover:underline hover:rounded-none border border-1 border-background"
        />
      </form>
      <div className="flex flex-col gap-m items-center pt-l">
        <div className="text-background opacity-80">
          Directly find us through
        </div>
        <div className="flex gap-xl">
          <div className="flex gap-s items-center">
            <Phone className="w-4 h-4 text-gray-400" />
            <p className="text-background">+91 829334823</p>
            {/* Would be cool to add a map link here */}
          </div>
          <div className="flex gap-s items-center">
            <Mail className="w-4 h-4 text-gray-400" />
            <p className="text-background">iqbal@gmail.com</p>
            {/* Link to amenities section */}
          </div>
        </div>
      </div>
    </div>
  );
}
