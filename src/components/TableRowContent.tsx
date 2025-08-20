import { TableCell, Button, Checkbox } from "@mui/material";
import Image from "next/image";
import { Edit2, Trash2 } from "lucide-react";
import React, { useState } from "react";
import BudgetPopup from "@/components/Popups/BudgetPopup";
import ProductPopup from "@/components/Popups/ProductPopup";
import PaymentPopup from "@/components/Popups/PaymentPopup";
import CampaignFormPopup from "@/components/Popups/CampaignFormPopup";

export default function TableRowContent({ type, item }: { type: string; item: any }) {
  const [open, setOpen] = useState(false);
  if (type === "influencers") {
    return (
      <>
        <TableCell className="p-4"><Checkbox /></TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>




            <div>
              <div className="font-medium text-gray-900">{item.name}</div>
              <div className="text-gray-500 text-xs">{item.username}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3 text-gray-700">{item.role}</TableCell>
        <TableCell className="p-3">
          <span className="text-purple-700 bg-purple-200 px-2 py-1 rounded-full text-xs">
            {item.invitation}
          </span>
        </TableCell>
        <TableCell className="p-3">
          <span className={`px-2 py-1 rounded-full text-xs ${item.status === "Accepted" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
            }`}>
            {item.status}
          </span>
        </TableCell>
        <TableCell className="p-3 text-right">
          <Button className="text-gray-400 hover:text-red-500 min-w-0 p-1">
            <Trash2 size={18} />
          </Button>
        </TableCell>
      </>
    );
  }
  // ---------------------------

  if (type === "productContent") {
    return (
      <>
        <TableCell className="p-4 text-gray-500">
          <Button
            className="text-gray-400 min-w-0 p-1"
            onClick={() => setOpen(true)}
          >
            <Edit2 size={18} className="text-black" />
          </Button>
        </TableCell>

        {/* Popup */}
        <CampaignFormPopup isOpen={open} onClose={() => setOpen(false)} />

        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.influencerName}</div>
              <div className="text-gray-500 text-xs">{item.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3"><a href={item.productDetailsLink} className="text-blue-600 underline text-xs">Links</a></TableCell>
        <TableCell className="p-3"><a href={item.productLink} className="text-blue-600 underline text-xs">Links</a></TableCell>
        <TableCell className="p-3">{item.type}</TableCell>
        <TableCell className="p-3">{item.noOfPost}</TableCell>
        <TableCell className="p-3 text-xs">{item.guidelines}</TableCell>
        <TableCell className="p-3">{item.deadline}</TableCell>
        <TableCell className="p-3">{item.status}</TableCell>
      </>
    );
  }
  // ------------------------------------

  if (type === "budget") {
    return (
      <>
        <TableCell className="p-4 text-gray-500">
          <Button className="text-gray-400 hover:text-blue-500 min-w-0 p-1">
            <Edit2 size={18} className="text-black" />

          </Button>
        </TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.influencerName}</div>
              <div className="text-gray-500 text-xs">{item.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">{item.CPP}</TableCell>
        <TableCell className="p-3">{item.CPS}</TableCell>
        <TableCell className="p-3">{item.CPVID}</TableCell>
        <TableCell className="p-3">{item.performanceHike}</TableCell>
        <TableCell className="p-3">{item.spend}</TableCell>
        <TableCell className="p-3">
          <Button
            variant="text"
            className="text-blue-600 underline text-xs"
            onClick={() => setOpen(true)}
          >
            {item.budget}
          </Button>
        </TableCell>

        <BudgetPopup isOpen={open} onClose={() => setOpen(false)} />
      </>
    );
  }

  // --------------------------------


  if (type === "productSending") {
    return (
      <>
        <TableCell className="p-4 text-gray-500">
          <Button
            className="text-gray-400 hover:text-blue-500 min-w-0 p-1"
            onClick={() => setOpen(true)} // 🔹 open popup on click
          >
            <Edit2 size={18} className="text-black" />
          </Button>
        </TableCell>

        {/* Popup Component */}
        <ProductPopup isOpen={open} onClose={() => setOpen(false)} />
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.influencerName}</div>
              <div className="text-gray-500 text-xs">{item.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">{item.product}</TableCell>
        <TableCell className="p-3">{item.address}</TableCell>
        <TableCell className="p-3">{item.noOfProduct}</TableCell>
        <TableCell className="p-3">{item.trackingID}</TableCell>
        <TableCell className="p-3">{item.status}</TableCell>
      </>
    );
  }
  // -----------------------------------------

  if (type === "review") {
    return (
      <>
        <TableCell className="p-4 text-gray-500">
          <Button className="text-gray-400 hover:text-blue-500 min-w-0 p-1">
            <Edit2 size={18} className="text-black" />

          </Button>
        </TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.influencerName}</div>
              <div className="text-gray-500 text-xs">{item.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">{item.status}</TableCell>
        <TableCell className="p-3">{item.contentType}</TableCell>
        <TableCell className="p-3">{item.noOfPost}</TableCell>
        <TableCell className="p-3">
          {item.approval.map((approval: string, index: number) => (
            <Button
              key={index}
              className="text-red-600 text-xs mr-2"
            >
              {approval}
            </Button>
          ))}
        </TableCell>
        <TableCell className="p-3">{item.submittedPost}</TableCell>
      </>
    );
  }
  // ---------------------------------------

  if (type === "campaign") {
    return (
      <>
        {/* Edit Icon */}
        <TableCell className="p-4"><Checkbox /></TableCell>

        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.influencerName}</div>
              <div className="text-gray-500 text-xs">{item.influencerUsername}</div>
            </div>
          </div>
        </TableCell>

        {/* Post Link */}
        <TableCell className="p-3">{item.postLink}</TableCell>

        {/* No of Posts */}
        <TableCell className="p-3">{item.noOfPosts}</TableCell>

        {/* Audience */}
        <TableCell className="p-3">{item.audience}</TableCell>

        {/* Reach */}
        <TableCell className="p-3">{item.reach}</TableCell>

        {/* Likes */}
        <TableCell className="p-3">{item.likes}</TableCell>

        {/* Cost per Engagement */}
        <TableCell className="p-3">{item.costPerEngagement}</TableCell>

        {/* Engagement */}
        <TableCell className="p-3">{item.engagement}</TableCell>

        {/* Campaign Spend */}
        <TableCell className="p-3">{item.campaignSpend}</TableCell>

        {/* Conversion Rate */}
        <TableCell className="p-3">{item.conversionRate}</TableCell>

        {/* ROI */}
        <TableCell className="p-3">{item.roi}</TableCell>

        {/* Revenue Generated */}
        <TableCell className="p-3">{item.revenueGenerated}</TableCell>
      </>
    );
  }

  // -----------------------------------


  if (type === "payment") {
    return (
      <>
        {/* Edit / Checkbox */}
        <TableCell className="p-4">
          <Checkbox />
        </TableCell>

        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{item.influencerName}</div>
              <div className="text-gray-500 text-xs">{item.influencerUsername}</div>
            </div>
          </div>
        </TableCell>

        {/* CPP */}
        <TableCell className="p-3">{item.CPP}</TableCell>

        {/* CPS */}
        <TableCell className="p-3">{item.CPS}</TableCell>

        {/* CPVID */}
        <TableCell className="p-3">{item.CPVID}</TableCell>

        {/* Performance Hike */}
        <TableCell className="p-3">{item.performanceHike}</TableCell>

        {/* Spend */}
        <TableCell className="p-3">{item.spend}</TableCell>

        {/* Date */}
        <TableCell className="p-3">{item.date}</TableCell>

        {/* Status */}
        <TableCell className="p-3">{item.status}</TableCell>

        {/* Payment */}
        <TableCell className="p-3">
          <Button
            variant="text"
            className="text-blue-600 underline text-xs"
            onClick={() => setOpen(true)}
          >
            {item.payment}
          </Button>
        </TableCell>

        <PaymentPopup isOpen={open} onClose={() => setOpen(false)} />
      </>
    );
  }



  return null;
}
