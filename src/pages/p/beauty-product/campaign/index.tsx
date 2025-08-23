"use client";
import { useState, Sidebar, StatsGrid, AnimatedTable, Header, data } from "@/lib/imports";


const stats = [
  { value: 102000, label: "Total Audience" },
  { value: 92000, label: "Total Engagement" },
  { value: 12000, label: "Total Reach" },
  { value: 110, label: "Total Impression" },
  { value: 1000, label: "Avg. Daily Reach" },
];

export default function InfluencersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Flatten product campaigns across all influencers
  const campaign = data.flatMap((influencer) =>
    influencer.campaign.map((sending) => ({
      influencerName: influencer.name,
      influencerUsername: influencer.username,
      avatar: influencer.avatar,
      role: influencer.role || "N/A",
      invitation: influencer.invitation || "N/A",
      ...sending,
    }))
  );

  const totalPages = Math.ceil(campaign.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = campaign.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-white text-sm">
      {/* ✅ Header across the top */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6 space-y-8 overflow-x-auto">
          {/* Stats Cards */}
          <StatsGrid stats={stats} />

          {/* Review Table */}
          <AnimatedTable
            currentData={currentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type="campaign"
          />
        </main>
      </div>
    </div>
  );
}
