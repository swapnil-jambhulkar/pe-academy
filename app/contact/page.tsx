"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/80">
                Have questions? We're here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black">Contact Information</CardTitle>
                    <CardDescription className="text-gray-600">
                      Reach out via email or fill out the form
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-black flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-black">Email</p>
                        <a
                          href="mailto:contact@norlandcapital.co.uk"
                          className="text-gray-700 hover:text-black transition-colors"
                        >
                          contact@norlandcapital.co.uk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-black flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-black">Response Time</p>
                        <p className="text-gray-700">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black">Common Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Check out our FAQ page for answers to frequently asked questions.
                    </p>
                    <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white" asChild>
                      <Link href="/faq">
                        View FAQ
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black">Send Us a Message</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll get back to you soon.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you! Your message has been sent. We'll get back to you soon.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                            Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {errors.name && (
                            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {errors.email && (
                            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                            Subject *
                          </label>
                          <input
                            id="subject"
                            type="text"
                            {...register("subject", { required: "Subject is required" })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {errors.subject && (
                            <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            {...register("message", { required: "Message is required" })}
                            className="w-full px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {errors.message && (
                            <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                          )}
                        </div>

                        <Button type="submit" variant="default" className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
