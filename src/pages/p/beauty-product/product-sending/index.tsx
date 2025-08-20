"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AnimatedTable from "@/components/AnimatedTable";
import Header from "@/components/Header"; // 👈 import Header
import data from "@/data/influencer";

export default function ProductSendingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Flatten productSending arrays across all influencers
  const productSendingData = data.flatMap((influencer) =>
    influencer.productSending.map((sending) => ({
      influencerName: influencer.name,
      influencerUsername: influencer.username,
      avatar: influencer.avatar,
      role: influencer.role || "N/A",
      invitation: influencer.invitation || "N/A",
      ...sending,
    }))
  );

  const totalPages = Math.ceil(productSendingData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = productSendingData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-white text-sm">
      {/* Header at top */}
      <Header />

      {/* Content area */}
      <div className="flex flex-1">
        <Sidebar />
        <AnimatedTable
          currentData={currentData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          type="productSending"
          containerVariants={undefined}
          rowVariants={undefined}
        />
      </div>
    </div>
  );
}
