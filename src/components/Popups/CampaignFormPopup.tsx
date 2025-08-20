"use client";

import { useEffect } from "react";
import { useState } from "react";

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

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    onClose(); // close after submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-2xl"
    >
      <div className="grid grid-cols-2 gap-6">
        {/* Product Detail */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Product detail</label>
          <input
            type="file"
            name="productDetail"
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Product Link */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Product link</label>
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
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* No of post */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">No of post</label>
          <input
            type="number"
            name="noOfPost"
            value={formData.noOfPost}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Guidelines */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Guidelines & Instructions</label>
          <input
            type="file"
            name="guidelines"
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 text-gray-700 text-sm">Deadline</label>
          <input
            type="text"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>

        {/* Status */}
        <div className="col-span-2">
          <label className="block mb-1 text-gray-700 text-sm">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 text-sm bg-gray-50"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-10 py-2 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
        >
          Set
        </button>
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
      <div className="bg-white p-6 rounded-2xl w-full max-w-3xl relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-6">Campaign Form</h2>

        {/* Campaign Form inside popup */}
        <CampaignForm onClose={onClose} />
      </div>
    </div>
  );
}
