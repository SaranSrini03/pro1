"use client";
import { useState } from "react";
import { Sidebar, AnimatedTable, data as initialData, Header, GradientButton } from "@/lib/imports";

export default function InfluencersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonState, setButtonState] = useState<"send" | "start" | "hidden">("send");
  const [tableMode, setTableMode] = useState<"normal" | "start">("normal");
  const [tableData, setTableData] = useState(initialData);

  const rowsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;

  // Determine current data based on table mode
  let currentData;
  if (tableMode === "normal") {
    currentData = tableData.slice(startIndex, startIndex + rowsPerPage);
  } else if (tableMode === "start") {
    currentData = tableData
      .flatMap((inf) =>
        inf.start?.map((s) => ({
          name: inf.name,
          username: inf.username,
          ...s
        })) || []
      )
      .slice(startIndex, startIndex + rowsPerPage);
  }

  // Button click handler
  const handleButtonClick = () => {
    if (buttonState === "send") {
      // Update all influencer invitations to "Invited"
      const updatedData = tableData.map((item) => ({ ...item, invitation: "Invited" }));
      setTableData(updatedData);
      setButtonState("start");
    } else if (buttonState === "start") {
      // Switch table to show `start` data
      setTableMode("start");
      setButtonState("hidden");
    }
  };

  return (
    <div className="min-h-screen bg-white text-sm flex flex-col">
      {/* Header */}
      <Header />

      {/* Top-right button */}
      {buttonState !== "hidden" && (
        <div className="flex justify-end px-10 py-2">
          <GradientButton
            label={buttonState === "send" ? "Send All Invitation" : "Start Campaign"}
            width="160px"
            onClick={handleButtonClick}
          />
        </div>
      )}

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Table */}
        <div className="flex-1 p-4">
          <AnimatedTable
            currentData={currentData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            type={tableMode === "normal" ? "influencers" : "start"}
            containerVariants={undefined}
            rowVariants={undefined}
          />
        </div>
      </div>
    </div>
  );
}
