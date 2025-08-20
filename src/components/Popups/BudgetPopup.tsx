"use client";

import { useEffect } from "react";

export default function BudgetPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Close popup when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-6">Set your budget</h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Cost per post (CPP)"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="1000"
            />
            <input
              type="text"
              placeholder="Cost per story (CPS)"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="1500"
            />
          </div>

          <input
            type="text"
            placeholder="Cost per video (CPVID)"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="1500"
          />

          <input
            type="text"
            placeholder="Performance Engagement hike"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="5-10% of Eng - 1500"
          />

          <input
            type="text"
            placeholder="Budget"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="30000"
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-md hover:opacity-90 transition"
            >
              Set
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
