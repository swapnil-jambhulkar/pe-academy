"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
};

export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // In production, this would send to an API endpoint or email service
    console.log("Email captured:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-background-light rounded-lg p-6 border border-neutral/10">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-5 w-5 text-accent-gold" />
        <h3 className="font-heading font-semibold text-primary">
          Get Our Free PE Roadmap
        </h3>
      </div>
      {submitted ? (
        <div className="text-green-600 text-sm">
          Thank you! Check your email for the roadmap.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-neutral/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold text-sm"
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-neutral/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-gold text-sm"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <Button type="submit" variant="gold" size="sm" className="w-full">
            Send Me Free Roadmap
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  );
}


