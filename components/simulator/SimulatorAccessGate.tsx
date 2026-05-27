"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, FileUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { grantSimulatorAccess } from "@/lib/simulator/access";

export type SimulatorRegistrationForm = {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  currentRole: string;
  organization: string;
  experienceLevel: string;
  peGoal: string;
  resume: FileList;
};

type SimulatorAccessGateProps = {
  onComplete: () => void;
};

const inputClassName =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-zinc-400";

const labelClassName = "block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5";

export default function SimulatorAccessGate({ onComplete }: SimulatorAccessGateProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SimulatorRegistrationForm>();

  const onSubmit = async (data: SimulatorRegistrationForm) => {
    setSubmitError(null);
    const file = data.resume?.[0];
    if (!file) {
      setSubmitError("Please upload your resume.");
      return;
    }

    const body = new FormData();
    body.append("fullName", data.fullName);
    body.append("email", data.email);
    body.append("phone", data.phone ?? "");
    body.append("linkedIn", data.linkedIn ?? "");
    body.append("currentRole", data.currentRole);
    body.append("organization", data.organization ?? "");
    body.append("experienceLevel", data.experienceLevel);
    body.append("peGoal", data.peGoal ?? "");
    body.append("resume", file);

    try {
      const response = await fetch("/api/simulator/register", {
        method: "POST",
        body,
      });
      const result = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        setSubmitError(result.error ?? "Registration failed. Please try again.");
        return;
      }

      grantSimulatorAccess();
      onComplete();
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
        Norland Academy · Day One Analyst Simulator
      </p>
      <h1 className="text-2xl sm:text-3xl font-heading font-bold text-black tracking-tight">
        Register before you begin
      </h1>
      <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
        The simulator uses live deal judgment scenarios from the Norland desk. Share your profile and resume so we can
        review your background and follow up on GCPE or PGP if relevant.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="sim-fullName" className={labelClassName}>
              Full name <span className="text-red-600">*</span>
            </label>
            <input
              id="sim-fullName"
              type="text"
              autoComplete="name"
              className={inputClassName}
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="text-red-600 text-xs mt-1" role="alert">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sim-email" className={labelClassName}>
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="sim-email"
              type="email"
              autoComplete="email"
              className={inputClassName}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sim-phone" className={labelClassName}>
              Phone
            </label>
            <input
              id="sim-phone"
              type="tel"
              autoComplete="tel"
              className={inputClassName}
              {...register("phone")}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sim-linkedin" className={labelClassName}>
              LinkedIn URL
            </label>
            <input
              id="sim-linkedin"
              type="url"
              placeholder="https://linkedin.com/in/..."
              className={inputClassName}
              {...register("linkedIn")}
            />
          </div>

          <div>
            <label htmlFor="sim-role" className={labelClassName}>
              Current role <span className="text-red-600">*</span>
            </label>
            <input
              id="sim-role"
              type="text"
              placeholder="e.g. IB analyst, MBA candidate"
              className={inputClassName}
              {...register("currentRole", { required: "Current role is required" })}
            />
            {errors.currentRole && (
              <p className="text-red-600 text-xs mt-1" role="alert">
                {errors.currentRole.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="sim-org" className={labelClassName}>
              Company / university
            </label>
            <input id="sim-org" type="text" className={inputClassName} {...register("organization")} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sim-exp" className={labelClassName}>
              Experience level <span className="text-red-600">*</span>
            </label>
            <select
              id="sim-exp"
              className={inputClassName}
              defaultValue=""
              {...register("experienceLevel", { required: "Select your experience level" })}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="Student / pre-professional">Student / pre-professional</option>
              <option value="0-2 years">0-2 years professional</option>
              <option value="3-5 years">3-5 years professional</option>
              <option value="5+ years">5+ years professional</option>
            </select>
            {errors.experienceLevel && (
              <p className="text-red-600 text-xs mt-1" role="alert">
                {errors.experienceLevel.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sim-goal" className={labelClassName}>
              Why private equity?
            </label>
            <textarea
              id="sim-goal"
              rows={3}
              className={`${inputClassName} resize-y min-h-[88px]`}
              placeholder="Brief note on your PE goal and timeline."
              {...register("peGoal")}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="sim-resume" className={labelClassName}>
              Resume <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                id="sim-resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="sr-only"
                {...register("resume", { required: "Resume is required" })}
              />
              <label
                htmlFor="sim-resume"
                className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-4 py-4 text-sm text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100/80 transition-colors"
              >
                <FileUp className="h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
                <span>
                  <span className="font-medium text-black">Upload resume</span>
                  <span className="block text-xs text-zinc-500 mt-0.5">PDF or Word, max 5 MB</span>
                </span>
              </label>
            </div>
            {errors.resume && (
              <p className="text-red-600 text-xs mt-1" role="alert">
                {errors.resume.message as string}
              </p>
            )}
          </div>
        </div>

        {submitError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2" role="alert">
            {submitError}
          </p>
        )}

        <p className="text-[11px] text-zinc-500 leading-relaxed">
          By continuing, you agree that Norland Academy may contact you about programmes. Your resume is used for
          admissions context only.
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-black text-white hover:bg-zinc-800 font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
              Submitting…
            </>
          ) : (
            <>
              Continue to simulator
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
