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
        extract: false,
      });

      if (phoneNumber && phoneNumber.isValid()) {
        return phoneNumber;
      }

      crx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid phone number",
      });
      return z.NEVER;
    }),
    comments: z.string().optional(),
  });
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

    if (!result.success) {
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
      className=" bg-primary flex flex-col px-m md:px-0 mx-m min-h-screen justify-center gap-xl "
      id="contact"
    >
      <div id="contactHeader" className="flex flex-col gap-s">
        <h1 className="font-bold text-background text-5xl">Contact Us</h1>
        <p className="text-base text-background">
          We will reach out to you in 48 hours
        </p>
      </div>

      <div id="contactDetails" className="flex flex-col md:flex-row gap-xl">
        {/* need to add n more colors, hierarchy is not proper */}

        {/* Contact through details */}

        <div id="directContact" className="flex flex-col text-white bg-black p-s md:p-xl gap-l grow">
          <div className="text-background opacity-80">
            Directly find us through
          </div>
          <div className="flex flex-col gap-m">
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

        {/* Contact through form */}
        <form
          action="get"
          onSubmit={handleSubmit}
          className="flex flex-col grow gap-m text-background items-grow p-s md:p-xl "
        >
          <label className="flex flex-col gap-s">
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="border border-1 border-gray-500 bg-gray2 px-m py-s text-black max-w-[400px]"
              required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </label>

          <label className="flex flex-col gap-s">
            Phone:
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              className="border border-1 border-gray-500 px-m py-s bg-gray2 text-black max-w-[400px]"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm">{formErrors.phone}</p>
            )}
          </label>

          <label className="flex flex-col gap-s">
            Comments:
            <textarea
              name="comments"
              id="comments"
              onChange={handleChange}
              value={formData.comments}
              className="border border-1 border-gray-500 px-m py-s bg-gray2 text-black resize-none max-w-[400px]"
            ></textarea>
            {formErrors.comments && (
              <p className="text-red-500 text-sm">{formErrors.comments}</p>
            )}
          </label>

          <input
            type="submit"
            value="Submit"
            className="p-m hover:underline hover:rounded-none underline-offset-10 border border-1 border-background max-w-[400px]"
          />
        </form>
      </div>
    </div>
  );
}
