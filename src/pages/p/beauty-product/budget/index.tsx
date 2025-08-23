"use client";
import { useState, Sidebar, AnimatedTable, data, Header } from "@/lib/imports";


export default function BudgetPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Flatten budgetAllocation arrays across all influencers
  const budgetData = data.flatMap((influencer) =>
    influencer.budgetAllocation.map((budget) => ({
      influencerName: influencer.name,
      influencerUsername: influencer.username,
      avatar: influencer.avatar,
      role: influencer.role || "N/A",
      invitation: influencer.invitation || "N/A",
      ...budget,
    }))
  );

  const totalPages = Math.ceil(budgetData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = budgetData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-white text-sm">
      {/* Header at the top */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <AnimatedTable
            currentData={currentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type="budget"
          />
        </main>
      </div>
    </div>
  );
}
