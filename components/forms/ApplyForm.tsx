"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ApplyFormData = {
  name: string;
  email: string;
  linkedIn: string;
  currentRole: string;
  firm: string;
  yearsInDealRole: string;
  location: "London" | "Dubai" | "Mumbai" | "Other";
  sectorWhy: string;
  transactionReflection: string;
  weeklyCommitment: "yes" | "no";
};

const inputClassName =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-gray-400";

const labelClassName = "block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5";

const LOCATIONS: ApplyFormData["location"][] = ["London", "Dubai", "Mumbai", "Other"];

export default function ApplyForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    defaultValues: { location: "London", weeklyCommitment: "yes" },
  });

  const onSubmit = async (data: ApplyFormData) => {
    setSubmitError(null);
    const submissionId = `${data.email.trim().toLowerCase()}-apply-${Date.now()}`;

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submissionId,
        }),
      });

      const result = (await response.json()) as { error?: string; details?: string; success?: boolean };

      if (!response.ok) {
        const detail = result.details ? ` (${result.details.slice(0, 120)})` : "";
        setSubmitError((result.error ?? "Application could not be submitted. Please try again.") + detail);
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="border border-gray-200 bg-gray-50 p-8 text-center">
        <h2 className="text-xl font-heading font-bold text-black mb-3">Application received</h2>
        <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
          Thank you. We review every application individually. If your profile fits, we will be in touch within seven
          days. Most applications are declined.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Full name
          </label>
          <input
            id="name"
            type="text"
            className={inputClassName}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name ? <p className="text-red-600 text-xs mt-1">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClassName}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email ? <p className="text-red-600 text-xs mt-1">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="linkedIn" className={labelClassName}>
            LinkedIn profile URL
          </label>
          <input
            id="linkedIn"
            type="url"
            className={inputClassName}
            placeholder="https://linkedin.com/in/..."
            {...register("linkedIn", { required: "LinkedIn URL is required" })}
          />
          {errors.linkedIn ? <p className="text-red-600 text-xs mt-1">{errors.linkedIn.message}</p> : null}
        </div>
        <div>
          <label htmlFor="currentRole" className={labelClassName}>
            Current role
          </label>
          <input
            id="currentRole"
            type="text"
            className={inputClassName}
            {...register("currentRole", { required: "Current role is required" })}
          />
          {errors.currentRole ? <p className="text-red-600 text-xs mt-1">{errors.currentRole.message}</p> : null}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firm" className={labelClassName}>
            Firm
          </label>
          <input
            id="firm"
            type="text"
            className={inputClassName}
            {...register("firm", { required: "Firm is required" })}
          />
          {errors.firm ? <p className="text-red-600 text-xs mt-1">{errors.firm.message}</p> : null}
        </div>
        <div>
          <label htmlFor="yearsInDealRole" className={labelClassName}>
            Years in a deal role
          </label>
          <input
            id="yearsInDealRole"
            type="text"
            className={inputClassName}
            placeholder="e.g. 5"
            {...register("yearsInDealRole", { required: "This field is required" })}
          />
          {errors.yearsInDealRole ? (
            <p className="text-red-600 text-xs mt-1">{errors.yearsInDealRole.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="location" className={labelClassName}>
          Location
        </label>
        <select id="location" className={inputClassName} {...register("location", { required: true })}>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sectorWhy" className={labelClassName}>
          Which sector would you pursue and why?
        </label>
        <textarea
          id="sectorWhy"
          rows={4}
          className={inputClassName}
          {...register("sectorWhy", {
            required: "Please describe your sector choice",
            minLength: { value: 50, message: "Please write at least 50 characters" },
          })}
        />
        {errors.sectorWhy ? <p className="text-red-600 text-xs mt-1">{errors.sectorWhy.message}</p> : null}
      </div>

      <div>
        <label htmlFor="transactionReflection" className={labelClassName}>
          Describe one transaction you worked on and what you would do differently as the principal
        </label>
        <textarea
          id="transactionReflection"
          rows={6}
          className={inputClassName}
          {...register("transactionReflection", {
            required: "Please share your transaction reflection",
            minLength: { value: 100, message: "Please write at least 100 characters" },
          })}
        />
        {errors.transactionReflection ? (
          <p className="text-red-600 text-xs mt-1">{errors.transactionReflection.message}</p>
        ) : null}
      </div>

      <fieldset>
        <legend className={labelClassName}>
          Can you commit ten to twelve hours per week for twelve weeks?
        </legend>
        <div className="flex flex-wrap gap-6 mt-2">
          <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
            <input type="radio" value="yes" {...register("weeklyCommitment", { required: true })} />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
            <input type="radio" value="no" {...register("weeklyCommitment", { required: true })} />
            No
          </label>
        </div>
        {errors.weeklyCommitment ? (
          <p className="text-red-600 text-xs mt-1">Please confirm your weekly commitment</p>
        ) : null}
      </fieldset>

      {submitError ? (
        <p className="text-red-600 text-sm" role="alert" aria-live="polite">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-black text-white hover:bg-gray-900">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit application
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500">
        By submitting, you confirm the information is accurate. We do not share your details with third parties except
        where required to process your application.
      </p>
    </form>
  );
}
