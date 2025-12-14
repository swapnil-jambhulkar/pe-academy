"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FrustrationData {
  label: string;
  percentage: number;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  category: string;
}

interface FrustrationHeatmapProps {
  data: FrustrationData[];
}

export default function FrustrationHeatmap({ data }: FrustrationHeatmapProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Sort by percentage (highest first)
  const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);
  
  // Get max percentage for heatmap intensity
  const maxPercentage = Math.max(...sortedData.map(d => d.percentage));

  // Color gradient function - darker = higher percentage
  const getHeatmapColor = (percentage: number) => {
    const intensity = percentage / maxPercentage;
    if (intensity >= 0.9) return "#000000"; // Black for highest
    if (intensity >= 0.8) return "#1a1a1a"; // Very dark
    if (intensity >= 0.7) return "#2d2d2d"; // Dark gray
    if (intensity >= 0.6) return "#404040"; // Medium dark
    if (intensity >= 0.5) return "#525252"; // Medium
    return "#666666"; // Lighter gray
  };

  // Get text color based on background
  const getTextColor = (percentage: number) => {
    const intensity = percentage / maxPercentage;
    return intensity >= 0.7 ? "#ffffff" : "#000000";
  };

  return (
    <div className="w-full space-y-2">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-700">
          Top Frustrations
        </h4>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          Tap to expand
        </span>
      </div>

      {/* Heatmap Bars */}
      {sortedData.map((item, index) => {
        const Icon = item.icon;
        const isSelected = selectedIndex === index;
        const bgColor = getHeatmapColor(item.percentage);
        const textColor = getTextColor(item.percentage);
        const barWidth = `${item.percentage}%`;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative"
          >
            {/* Heatmap Bar Container */}
            <div
              className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                isSelected 
                  ? "border-black shadow-xl scale-[1.02]" 
                  : "border-transparent hover:border-gray-300 cursor-pointer"
              }`}
              onClick={() => setSelectedIndex(isSelected ? null : index)}
              style={{ backgroundColor: bgColor }}
            >
              {/* Content */}
              <div className="relative z-10 p-4">
                <div className="flex items-center justify-between mb-2">
                  {/* Left: Icon + Label */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {Icon && (
                      <div 
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ 
                          backgroundColor: textColor === "#ffffff" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
                        }}
                      >
                        <Icon 
                          className="h-4 w-4 flex-shrink-0" 
                          style={{ color: textColor }}
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 
                        className="text-sm font-bold leading-tight"
                        style={{ color: textColor }}
                      >
                        {item.label}
                      </h4>
                      <p 
                        className="text-xs mt-0.5 opacity-80"
                        style={{ color: textColor }}
                      >
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* Right: Percentage */}
                  <div className="ml-4 flex-shrink-0">
                    <div 
                      className="text-3xl font-heading font-bold leading-none"
                      style={{ color: textColor }}
                    >
                      {item.percentage}
                    </div>
                    <div 
                      className="text-xs font-semibold mt-0.5 opacity-90"
                      style={{ color: textColor }}
                    >
                      % cited this
                    </div>
                  </div>
                </div>

                {/* Progress Bar Overlay */}
                <div 
                  className="h-1.5 rounded-full overflow-hidden mt-2"
                  style={{ backgroundColor: textColor === "#ffffff" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: textColor === "#ffffff" ? "#ffffff" : "#000000",
                      opacity: 0.9
                    }}
                  />
                </div>
              </div>

              {/* Animated Background Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    ${textColor} 10px,
                    ${textColor} 20px
                  )`
                }}
              />
            </div>

            {/* Expanded Description */}
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <p className="text-xs text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
      >
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-heading font-bold text-black mb-1">
              {sortedData.length}
            </div>
            <div className="text-xs text-gray-600">Key Frustrations</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-black mb-1">
              {Math.round(sortedData.reduce((sum, d) => sum + d.percentage, 0) / sortedData.length)}%
            </div>
            <div className="text-xs text-gray-600">Average Response</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

