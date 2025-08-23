import {
  motion,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableHeader,
  TableRowContent,
  Pagination,
  Variants,
} from "@/lib/imports";

import { TableRowItem, TableType } from "@/data/types";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

interface AnimatedTableProps<T extends TableRowItem> {
  currentData: T[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  type: TableType;
}

export default function AnimatedTable<T extends TableRowItem>({
  currentData,
  currentPage,
  setCurrentPage,
  totalPages,
  type,
}: AnimatedTableProps<T>) {
  return (
    <main className="flex-1 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-x-auto border rounded-xl shadow-md bg-white"
      >
        <TableContainer component={Paper} className="shadow-none text-black">
          <Table className="w-full border-collapse">
            <TableHead className="bg-gray-100 text-gray-600 text-xs uppercase">
              <TableHeader type={type} />
            </TableHead>

            <motion.tbody
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {currentData.map((item, idx) => (
                <motion.tr
                  key={idx}
                  variants={rowVariants}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <TableRowContent type={type} item={item} />
                </motion.tr>
              ))}
            </motion.tbody>
          </Table>
        </TableContainer>
      </motion.div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </main>
  );
}
