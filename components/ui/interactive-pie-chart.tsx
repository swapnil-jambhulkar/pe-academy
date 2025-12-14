"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PieChartData {
  label: string;
  value: number;
  color: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface InteractivePieChartProps {
  data: PieChartData[];
  size?: number;
}

export default function InteractivePieChart({ data, size = 200 }: InteractivePieChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Calculate total and percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const percentages = data.map((item) => (item.value / total) * 100);

  // Calculate angles for pie slices
  let currentAngle = -90; // Start from top
  const slices = data.map((item, index) => {
    const percentage = percentages[index];
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    // Convert to radians
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    // Calculate path for pie slice
    const radius = size / 2;
    const x1 = radius + radius * Math.cos(startRad);
    const y1 = radius + radius * Math.sin(startRad);
    const x2 = radius + radius * Math.cos(endRad);
    const y2 = radius + radius * Math.sin(endRad);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = [
      `M ${radius} ${radius}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      "Z",
    ].join(" ");

    return {
      ...item,
      pathData,
      percentage,
      startAngle,
      endAngle,
      midAngle: startAngle + angle / 2,
    };
  });

  return (
    <div className="w-full">
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {slices.map((slice, index) => {
            const midRad = (slice.midAngle * Math.PI) / 180;
            const labelRadius = (size / 2) * 0.7;
            const labelX = size / 2 + labelRadius * Math.cos(midRad);
            const labelY = size / 2 + labelRadius * Math.sin(midRad);

            return (
              <g key={index}>
                <motion.path
                  d={slice.pathData}
                  fill={slice.color}
                  stroke="#fff"
                  strokeWidth={hoveredIndex === index ? 4 : 2}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                />
                {slice.percentage > 8 && (
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-xs font-bold pointer-events-none"
                    transform={`rotate(${slice.midAngle + 90}, ${labelX}, ${labelY})`}
                  >
                    {slice.percentage.toFixed(0)}%
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2">
        {slices.map((slice, index) => {
          const Icon = slice.icon;
          return (
            <motion.div
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                hoveredIndex === index ? "bg-gray-100 scale-105" : "bg-white"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: slice.color }}
              />
              {Icon && <Icon className="h-4 w-4 text-gray-600" />}
              <div className="flex-1">
                <div className="text-sm font-semibold text-black">{slice.label}</div>
                <div className="text-xs text-gray-600">{slice.percentage.toFixed(1)}%</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

