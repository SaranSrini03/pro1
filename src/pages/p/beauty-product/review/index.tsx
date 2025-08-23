"use client";
import { useState, Sidebar, AnimatedTable, Header, data } from "@/lib/imports";


export default function ReviewPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Flatten review arrays across all influencers
  const review = data.flatMap((influencer) =>
    influencer.review.map((sending) => ({
      influencerName: influencer.name,
      influencerUsername: influencer.username,
      avatar: influencer.avatar,
      role: influencer.role || "N/A",
      invitation: influencer.invitation || "N/A",
      ...sending,
    }))
  );

  const totalPages = Math.ceil(review.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = review.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-white text-sm">
      {/* Header always at top */}
      <Header />

      {/* Main content with Sidebar + Table */}
      <div className="flex flex-1">
        <Sidebar />
        {/* Table */}
        <div className="flex-1 p-6 overflow-x-auto">
          <AnimatedTable
            currentData={currentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type="review" // 👈 tells AnimatedTable to render review layout
          />
        </div>
      </div>
    </div>
  );
}
