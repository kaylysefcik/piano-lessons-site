"use client";
import React from "react";
import { motion } from "framer-motion";
import { Piano, Music, Smile, Star } from "lucide-react";

const icons = [
  { icon: <Piano size={40} />, label: "Start Lessons" },
  { icon: <Music size={40} />, label: "Sheet Music" },
  { icon: <Smile size={40} />, label: "Meet the Teacher" },
  { icon: <Star size={40} />, label: "Student Showcase" },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Hi little maestros!</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">Who wants to become the piano man!</h2>

      <img
        src="https://cdn.pixabay.com/photo/2017/01/31/20/20/piano-2023025_1280.png"
        alt="Cartoon Grand Piano"
        className="w-72 h-auto mb-10 rounded-2xl shadow-lg"
      />

      <div className="flex overflow-x-auto space-x-6 w-full max-w-4xl py-4">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`p-4 rounded-2xl shadow-xl bg-white hover:scale-105 transform transition-all duration-300 ${
                hoveredIndex === index ? "ring-4 ring-purple-400" : ""
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                {item.icon}
                <span className="text-lg font-medium">{item.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
