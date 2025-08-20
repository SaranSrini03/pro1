"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AnimatedTable from "@/components/AnimatedTable";
import data from "@/data/influencer";
import Header from "@/components/Header";

export default function InfluencersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="min-h-screen bg-white text-sm flex flex-col">
      {/* Header at top */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Table on the right */}
        <div className="flex-1 p-4">
          <AnimatedTable
            currentData={currentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type="influencers"
            containerVariants={undefined}
            rowVariants={undefined}
          />
        </div>
      </div>
    </div>
  );
}
