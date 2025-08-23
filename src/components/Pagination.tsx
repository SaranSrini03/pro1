import { Button } from "@/lib/imports";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  const pages: (number | string)[] = [];
  const maxVisible = 4;

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) pages.push(1, 2, 3, "...", totalPages);
    else if (currentPage >= totalPages - 2)
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    else
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
  }

  return (
    <div className="flex justify-center text-gray-600 items-center gap-2 mt-6 text-xs">
      <Button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 normal-case"
      >
        &lt; Previous
      </Button>

      {pages.map((page, idx) => (
        <Button
          key={idx}
          onClick={() => typeof page === "number" && setCurrentPage(page)}
          disabled={page === "..."}
          className={`px-3 py-1 border rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"
          } ${page === "..." ? "cursor-default" : ""} normal-case`}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 normal-case"
      >
        Next &gt;
      </Button>
    </div>
  );
}
