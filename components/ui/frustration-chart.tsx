"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FrustrationData {
  label: string;
  percentage: number;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  color: string;
}

interface FrustrationChartProps {
  data: FrustrationData[];
}

export default function FrustrationChart({ data }: FrustrationChartProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Sort by percentage (highest first)
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="w-full space-y-3">
      {sortedData.map((item, index) => {
        const Icon = item.icon;
        const isSelected = selectedIndex === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`bg-white border-2 rounded-lg p-4 cursor-pointer transition-all ${
              isSelected 
                ? "border-black shadow-lg scale-[1.02]" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setSelectedIndex(isSelected ? null : index)}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              {Icon && (
                <div className={`p-2 rounded-lg flex-shrink-0 ${
                  isSelected ? "bg-black" : "bg-gray-100"
                }`}>
                  <Icon className={`h-4 w-4 ${
                    isSelected ? "text-white" : "text-gray-700"
                  }`} />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-semibold ${
                    isSelected ? "text-black" : "text-gray-900"
                  }`}>
                    {item.label}
                  </h4>
                  <div className="flex items-baseline gap-1 ml-2">
                    <span className={`text-2xl font-heading font-bold ${
                      isSelected ? "text-black" : "text-gray-900"
                    }`}>
                      {item.percentage}
                    </span>
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full ${
                      isSelected ? "bg-black" : item.color
                    }`}
                  />
                </div>

                {/* Description - Show when selected */}
                {isSelected && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-gray-600 leading-relaxed mt-2"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Summary */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          <span className="font-semibold text-black">700+</span> aspiring PE professionals surveyed
        </p>
      </div>
    </div>
  );
}

