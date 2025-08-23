"use client";
import {
  useState,
  InfluencerCard,
  SearchSortBar,
  GradientButton,
  toast
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
    <div className="min-h-screen px-18 py-10 bg-gray-50">
      <div className="w-[94rem] mx-auto ">
        <SearchSortBar />
      </div>
      <div className="flex items-center justify-between mb-12 max-w-[1615px]">
        <h1 className="text-2xl ml-30 font-semibold text-gray-800">
          {fakeData.length} Results
        </h1>
        <GradientButton
          label={added ? `Added ${fakeData.length} to Campaign` : `Add all to Campaign`}
          onClick={handleClick}
          width="w-auto"
        />
      </div>


      <div className="flex flex-wrap justify-center gap-8">
        {visibleItems.map((item) => (
          <InfluencerCard key={item.id} />
        ))}
      </div>


      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10 text-sm text-gray-500">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 rounded  hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        {/* First 5 pages */}
        {[...Array(Math.min(5, totalPages)).keys()].map((i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded border border-gray-500 ${currentPage === i + 1
              ? "bg-white text-blue-500"
              : "hover:bg-gray-200 text-gray-500"
              }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Ellipsis if more pages */}
        {totalPages > 5 && <span className="px-2">...</span>}

        {/* Last page */}
        {totalPages > 5 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-3 py-1 rounded border border-[#151515] ${currentPage === totalPages
              ? "bg-white text-blue-500"
              : "hover:bg-gray-200 text-black"
              }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 rounded  hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>

    </div>
  );
}
