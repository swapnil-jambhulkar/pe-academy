"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APPLY_LOCATIONS, type ApplyLocation } from "@/lib/schemas/apply";

export type ApplyFormData = {
  name: string;
  email: string;
  linkedIn: string;
  currentRole: string;
  firm: string;
  yearsInDealRole: string;
  location: ApplyLocation;
  sectorWhy: string;
  transactionReflection: string;
  weeklyCommitment: "yes" | "no";
};

const inputClassName =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-gray-400";

const labelClassName = "block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5";

const LINKEDIN_PATTERN = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w%-]+\/?$/i;
const YEARS_PATTERN = /^\d{1,2}(\.\d)?$/;

export default function ApplyForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    mode: "onTouched",
  });

  const onSubmit = async (data: ApplyFormData) => {
    setSubmitError(null);

    if (data.weeklyCommitment !== "yes") {
      return;
    }

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <p className="text-sm text-gray-600">
        Every field is required. Your application is saved to our admissions spreadsheet only when all answers are
        complete.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            className={inputClassName}
            {...register("name", {
              required: "Name is required",
              validate: (value) => value.trim().length > 0 || "Name is required",
            })}
          />
          {errors.name ? <p className="text-red-600 text-xs mt-1">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            className={inputClassName}
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                const trimmed = value.trim();
                if (!trimmed) return "Email is required";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Enter a valid email address";
                return true;
              },
            })}
          />
          {errors.email ? <p className="text-red-600 text-xs mt-1">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="linkedIn" className={labelClassName}>
            LinkedIn profile URL <span className="text-red-600">*</span>
          </label>
          <input
            id="linkedIn"
            type="url"
            required
            className={inputClassName}
            placeholder="https://linkedin.com/in/..."
            {...register("linkedIn", {
              required: "LinkedIn URL is required",
              validate: (value) => {
                const trimmed = value.trim();
                if (!trimmed) return "LinkedIn URL is required";
                if (!LINKEDIN_PATTERN.test(trimmed)) {
                  return "Enter a valid LinkedIn profile URL (https://linkedin.com/in/your-name)";
                }
                return true;
              },
            })}
          />
          {errors.linkedIn ? <p className="text-red-600 text-xs mt-1">{errors.linkedIn.message}</p> : null}
        </div>
        <div>
          <label htmlFor="currentRole" className={labelClassName}>
            Current role <span className="text-red-600">*</span>
          </label>
          <input
            id="currentRole"
            type="text"
            required
            className={inputClassName}
            {...register("currentRole", {
              required: "Current role is required",
              validate: (value) => value.trim().length > 0 || "Current role is required",
            })}
          />
          {errors.currentRole ? <p className="text-red-600 text-xs mt-1">{errors.currentRole.message}</p> : null}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firm" className={labelClassName}>
            Firm <span className="text-red-600">*</span>
          </label>
          <input
            id="firm"
            type="text"
            required
            className={inputClassName}
            {...register("firm", {
              required: "Firm is required",
              validate: (value) => value.trim().length > 0 || "Firm is required",
            })}
          />
          {errors.firm ? <p className="text-red-600 text-xs mt-1">{errors.firm.message}</p> : null}
        </div>
        <div>
          <label htmlFor="yearsInDealRole" className={labelClassName}>
            Years in a deal role <span className="text-red-600">*</span>
          </label>
          <input
            id="yearsInDealRole"
            type="text"
            inputMode="decimal"
            required
            className={inputClassName}
            placeholder="e.g. 5"
            {...register("yearsInDealRole", {
              required: "This field is required",
              validate: (value) => {
                const trimmed = value.trim();
                if (!trimmed) return "This field is required";
                if (!YEARS_PATTERN.test(trimmed)) return "Enter a number (e.g. 5)";
                return true;
              },
            })}
          />
          {errors.yearsInDealRole ? (
            <p className="text-red-600 text-xs mt-1">{errors.yearsInDealRole.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="location" className={labelClassName}>
          Location <span className="text-red-600">*</span>
        </label>
        <select
          id="location"
          required
          className={inputClassName}
          {...register("location", {
            required: "Select a location",
            validate: (value) => APPLY_LOCATIONS.includes(value) || "Select a location",
          })}
        >
          <option value="" disabled>
            Select location
          </option>
          {APPLY_LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        {errors.location ? <p className="text-red-600 text-xs mt-1">{errors.location.message}</p> : null}
      </div>

      <div>
        <label htmlFor="sectorWhy" className={labelClassName}>
          Which sector would you pursue and why? <span className="text-red-600">*</span>
        </label>
        <textarea
          id="sectorWhy"
          rows={4}
          required
          className={inputClassName}
          {...register("sectorWhy", {
            required: "Please describe your sector choice",
            validate: (value) => {
              const trimmed = value.trim();
              if (!trimmed) return "Please describe your sector choice";
              if (trimmed.length < 50) return "Please write at least 50 characters";
              return true;
            },
          })}
        />
        {errors.sectorWhy ? <p className="text-red-600 text-xs mt-1">{errors.sectorWhy.message}</p> : null}
      </div>

      <div>
        <label htmlFor="transactionReflection" className={labelClassName}>
          Describe one transaction you worked on and what you would do differently as the principal{" "}
          <span className="text-red-600">*</span>
        </label>
        <textarea
          id="transactionReflection"
          rows={6}
          required
          className={inputClassName}
          {...register("transactionReflection", {
            required: "Please share your transaction reflection",
            validate: (value) => {
              const trimmed = value.trim();
              if (!trimmed) return "Please share your transaction reflection";
              if (trimmed.length < 100) return "Please write at least 100 characters";
              return true;
            },
          })}
        />
        {errors.transactionReflection ? (
          <p className="text-red-600 text-xs mt-1">{errors.transactionReflection.message}</p>
        ) : null}
      </div>

      <fieldset>
        <legend className={labelClassName}>
          Can you commit ten to twelve hours per week for twelve weeks? <span className="text-red-600">*</span>
        </legend>
        <div className="flex flex-wrap gap-6 mt-2">
          <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
            <input
              type="radio"
              value="yes"
              required
              {...register("weeklyCommitment", {
                required: "Please confirm your weekly commitment",
                validate: (value) =>
                  value === "yes" || "You must be able to commit ten to twelve hours per week to apply.",
              })}
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer">
            <input type="radio" value="no" {...register("weeklyCommitment", { required: true })} />
            No
          </label>
        </div>
        {errors.weeklyCommitment ? (
          <p className="text-red-600 text-xs mt-1">{errors.weeklyCommitment.message}</p>
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
