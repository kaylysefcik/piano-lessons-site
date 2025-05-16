"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Piano, Music, Smile, Star, Home } from "lucide-react";
import { motion } from "framer-motion";

const icons = [
  { icon: <Piano size={40} />, label: "Start Lessons", href: "/start-lessons" },
  { icon: <Music size={40} />, label: "Sheet Music", href: "/sheet-music" },
  { icon: <Smile size={40} />, label: "Meet the Teacher", href: "/meet-the-teacher" },
  { icon: <Star size={40} />, label: "Student Showcase", href: "/student-showcase" },
];

export default function PianoLessonsApp() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const router = useRouter();

  return (
      <div className="min-h-screen bg-[url('/musical-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-6 text-black">
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center gap-2 text-black bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full px-4 py-2 shadow-md">
          <Home size={20} /> Home
        </Link>
      </div>

      <h1 className="text-5xl text-white text-center mb-4 font-[\'Baguet Script\',cursive]">
        Hi little maestros!
      </h1>
      <h2 className="text-2xl text-white text-center mb-8 font-[\'Baguet Script\',cursive]">
        Who wants to become the piano man!
      </h2>

      <img src="https://cdn.pixabay.com/photo/2017/01/31/20/20/piano-2023025_1280.png" alt="Cartoon Grand Piano" className="w-64 h-auto mb-8 rounded-xl shadow-lg" />

      <div className="flex flex-row justify-center items-center space-x-4 mt-8">
        {icons.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => router.push(item.href)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 text-base font-medium text-black px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition-all duration-300"
          >
            {item.icon}
            {item.label}
          </motion.button>
        ))}
      </div>
      <form
        action="https://formsubmit.co/kayly.sefcik@gmail.com"
        method="POST"
        className="w-full max-w-xl bg-white bg-opacity-90 p-6 mt-10 rounded-2xl shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">Contact Me</h3>

        <label className="block mb-2 font-medium">Your Email (required):</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <label className="block mb-2 font-medium">Phone (optional):</label>
        <input
          type="tel"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <label className="block mb-2 font-medium">Comments (optional):</label>
        <textarea
          name="comments"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        ></textarea>

        {/* Optional: Disable CAPTCHA and redirect */}
        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg w-full transition"
        >
          Send
        </button>
      </form>

    </div>
  );
}