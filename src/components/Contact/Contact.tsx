"use client";

// import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { contactFormSchema } from "./schema";
import { ContactFormData, ContactFormErrors } from "../../types";
import { Mail, Phone, Trees } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      icon: Mail,
      title: "Email",
      description: "abc@gmail.com",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      description: "+91-987654321",
    },
    {
      id: 3,
      icon: Trees,
      title: "Address",
      description: "ABC Road, XYZ City, DEF",
    },
  ];

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    comments: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = contactFormSchema.safeParse(formData);
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

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({ name: "", phone: "", comments: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-primary flex flex-col px-m md:px-0 mx-m min-h-screen justify-center gap-xl"
      id="contact"
    >
      <div id="contactHeader" className="flex flex-col gap-s">
        <h1 className="font-bold text-background text-5xl">Contact Us</h1>
        <p className="text-base text-background">
          We will reach out to you in 48 hours
        </p>
      </div>

      <div id="contactDetails" className="flex flex-col md:flex-row gap-xl">
        <div
          id="directContact"
          className="flex flex-col text-white bg-black p-s md:p-xl gap-m grow"
        >
          <div className="text-background opacity-80">
            Directly find us through
          </div>

          <div className="flex flex-col gap-m">
            {contacts.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={contact.id}
                  className="flex group cursor-pointer border border-gray rounded p-m"
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                    <IconComponent
                      className="w-8 h-8 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {contact.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xs">
                      {contact.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col grow gap-m text-background items-grow p-s md:p-xl"
          aria-label="Contact form"
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
              aria-required="true"
              aria-invalid={!!formErrors.name}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm" role="alert">
                {formErrors.name}
              </p>
            )}
          </label>

          <label className="flex flex-col gap-s">
            Phone:
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              className="border border-1 border-gray-500 px-m py-s bg-gray2 text-black max-w-[400px]"
              required
              aria-required="true"
              aria-invalid={!!formErrors.phone}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm" role="alert">
                {formErrors.phone}
              </p>
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
              aria-invalid={!!formErrors.comments}
            ></textarea>
            {formErrors.comments && (
              <p className="text-red-500 text-sm" role="alert">
                {formErrors.comments}
              </p>
            )}
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="p-m hover:underline hover:rounded-none underline-offset-10 border border-1 border-background max-w-[400px] disabled:opacity-50"
            aria-busy={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
