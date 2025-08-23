"use client";
import {
  useState,
  InfluencerCard,
  SearchSortBar,
  GradientButton,
  toast,
  React
} from "@/lib/imports";

const fakeData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
}));

export default function InfluencerPage() {
  const [added, setAdded] = useState(false);
  const handleClick = () => {
    if (!added) {
      toast.success("Added to campaign ✅");
      setAdded(true);
    }
  };
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(fakeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = fakeData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-18 py-6 md:py-8 lg:py-10 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto">
        <SearchSortBar />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-10 lg:mb-12 max-w-[97rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-30 gap-4 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {fakeData.length} Results
        </h1>
        <GradientButton
          label={added ? `Added ${fakeData.length} to Campaign` : `Add all to Campaign`}
          onClick={handleClick}
          width="w-full sm:w-auto"
          className="text-sm sm:text-base"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        {visibleItems.map((item) => (
          <InfluencerCard key={item.id} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 md:mt-10 text-sm text-gray-500 px-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-2 sm:px-3 py-1 rounded hover:bg-gray-200 text-xs sm:text-sm"
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        {/* Always show first page */}
        <button
          onClick={() => handlePageChange(1)}
          className={`px-2 sm:px-3 py-1 rounded border ${currentPage === 1
            ? "bg-white text-blue-500 border-blue-500"
            : "border-gray-300 hover:bg-gray-200 text-gray-500"
          } text-xs sm:text-sm`}
        >
          1
        </button>

        {/* Show current page and surrounding pages with ellipsis as needed */}
        {currentPage > 3 && <span className="px-1 sm:px-2">...</span>}
        
        {currentPage > 2 && currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-2 sm:px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 text-gray-500 text-xs sm:text-sm"
          >
            {currentPage - 1}
          </button>
        )}
        
        {currentPage > 1 && currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage)}
            className="px-2 sm:px-3 py-1 rounded border bg-white text-blue-500 border-blue-500 text-xs sm:text-sm"
          >
            {currentPage}
          </button>
        )}
        
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-2 sm:px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 text-gray-500 text-xs sm:text-sm"
          >
            {currentPage + 1}
          </button>
        )}

        {currentPage < totalPages - 2 && <span className="px-1 sm:px-2">...</span>}

        {/* Always show last page if there is more than 1 page */}
        {totalPages > 1 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-2 sm:px-3 py-1 rounded border ${currentPage === totalPages
              ? "bg-white text-blue-500 border-blue-500"
              : "border-gray-300 hover:bg-gray-200 text-gray-500"
            } text-xs sm:text-sm`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-2 sm:px-3 py-1 rounded hover:bg-gray-200 text-xs sm:text-sm"
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}