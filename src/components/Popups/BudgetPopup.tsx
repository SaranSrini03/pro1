"use client";
import { useEffect, useState, GradientButton } from "@/lib/imports";
import React from "react";

function CampaignForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    productDetail: null,
    productLink: "",
    type: "",
    noOfPost: "",
    guidelines: null,
    deadline: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-2xl"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Product Detail */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Cost Per Post</label>
          <input
            type="text"
            name="productLink"
            placeholder="name"
            value={formData.productLink}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Product Link */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Cost Per Story</label>
          <input
            type="text"
            name="productLink"
            placeholder="name"
            value={formData.productLink}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Type */}
        <div className="col-span-2">
          <label className="block mb-1 text-gray-700 text-sm">Cost Per Video</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Performance Engagement Hike */}
        <div className="col-span-2">
          <label className="block mb-1 text-gray-700 text-sm">Performance Engagement Hike</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Budget */}
        <div className="col-span-2">
          <label className="block mb-1 text-gray-700 text-sm">Budget</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <GradientButton label="Set" />
      </div>
    </form>
  );
}

export default function CampaignPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
      <div className="bg-white p-6 rounded-2xl w-full max-w-3xl relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6">Set Your Budget</h2>

        <CampaignForm onClose={onClose} />
      </div>
    </div>
  );
}
