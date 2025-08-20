"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function CampaignHeader() {
  const [sortBy, setSortBy] = useState("Name");

  return (
    <div className="w-full py-2 px-16">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        {/* Left Side */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Beauty campaigns</h1>
          <p className="text-sm text-gray-500">Dec 21st - Jan 15th</p>
        </div>

        {/* Right Side */}
        <div className="flex items-left space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 text-black pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
            />
            <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg text-left px-8 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Name">Name</option>
              <option value="Date">Date</option>
              <option value="Status">Status</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  );
}
