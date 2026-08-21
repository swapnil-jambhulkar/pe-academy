"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PROGRAMME } from "@/lib/programmes";
import { cn } from "@/lib/utils";

type WaitlistValues = {
  name: string;
  email: string;
};

type WaitlistFormProps = {
  tone?: "light" | "dark";
  className?: string;
};

export default function WaitlistForm({ tone = "dark", className }: WaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistValues>();

  const onSubmit = async (values: WaitlistValues) => {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
        }),
      });
      const data = (await res.json()) as { message?: string; error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
      setMessage(
        data.message ?? `You are on the waitlist. Applications open ${PROGRAMME.applicationsOpenLabel}.`
      );
      reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  const isDark = tone === "dark";
  const fieldClass = isDark
    ? "w-full border border-white/30 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    : "w-full border border-gray-300 bg-white px-3 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-black";
  const errorClass = isDark ? "text-red-200" : "text-red-700";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(className)} noValidate>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="waitlist-name" className="sr-only">
            Name
          </label>
          <input
            id="waitlist-name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
            {...register("name", {
              required: "Enter your name",
              minLength: { value: 2, message: "Enter your name" },
              maxLength: { value: 80, message: "Name is too long" },
            })}
          />
          {errors.name ? (
            <p className={cn("mt-1 text-xs", errorClass)} role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="waitlist-email" className="sr-only">
            Email
          </label>
          <input
            id="waitlist-email"
            type="email"
            autoComplete="email"
            placeholder="Work email"
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
            {...register("email", {
              required: "Enter a valid email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email ? (
            <p className={cn("mt-1 text-xs", errorClass)} role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          disabled={status === "loading"}
          className={
            isDark
              ? "bg-white text-black hover:bg-gray-100 font-semibold"
              : "bg-black text-white hover:bg-gray-900 font-semibold"
          }
        >
          {status === "loading" ? "Joining..." : "Join the waitlist"}
        </Button>
        <p className={cn("text-xs", isDark ? "text-white/55" : "text-gray-500")}>
          Applications open {PROGRAMME.applicationsOpenLabel}.
        </p>
      </div>
      <div className="mt-3 min-h-[1.25rem]" aria-live="polite">
        {message ? (
          <p
            className={cn(
              "text-sm",
              status === "error" ? errorClass : isDark ? "text-white/80" : "text-gray-700"
            )}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
