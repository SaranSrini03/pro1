import {
  TableCell,
  Button,
  Checkbox,
  Image,
  Edit2,
  Trash2,
  useState,
  BudgetPopup,
  ProductPopup,
  PaymentPopup,
  CampaignFormPopup,
  Badge
} from "@/lib/imports";

import { Budget, Campaign, Influencer, Payment, ProductContent, ProductSending, Review, Start, TableRowItem, TableType } from "@/data/types";
// Union of all possible row items

// -------------------- COMPONENT --------------------

export default function TableRowContent({
  type,
  item,
}: {
  type: TableType;
  item: TableRowItem;
}) {
  const [open, setOpen] = useState(false);

  // -------------------- Influencers --------------------
  if (type === "influencers") {
    const influencer = item as Influencer;
    return (
      <>
        <TableCell className="p-4"><Checkbox /></TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src={influencer.avatar} alt={influencer.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{influencer.name}</div>
              <div className="text-gray-500 text-xs">{influencer.username}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3 text-gray-700">{influencer.role}</TableCell>
        <TableCell className="p-3">
          <Badge label={influencer.invitation} />
        </TableCell>
        <TableCell className="p-3">
          <Badge
            label={influencer.status}
            color={influencer.status === "Accepted" ? "text-green-600" : "text-red-600"}
            bgColor={influencer.status === "Accepted" ? "bg-green-100" : "bg-red-100"}
          />
        </TableCell>
        <TableCell className="p-3 text-right">
          <Button className="text-gray-400 hover:text-red-500 min-w-0 p-1">
            <Trash2 size={18} />
          </Button>
        </TableCell>
      </>
    );
  }

  // -------------------- Start --------------------
  if (type === "start") {
    const start = item as Start;
    return (
      <>
        <TableCell className="p-3"><Checkbox /></TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
              <Image src={start.avatar} alt={start.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-medium text-gray-900">{start.name}</span>
              <span className="text-gray-500 text-xs">{start.username}</span>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3 text-left">{start.audience}</TableCell>
        <TableCell className="p-3 text-left">{start.engRate}</TableCell>
        <TableCell className="p-3 text-left">{start.totalReach}</TableCell>
        <TableCell className="p-3 text-left">
          <Badge label="Links" color="text-green-600" bgColor="bg-green-100" href="/campaign/123" />
        </TableCell>
        <TableCell className="p-3 text-left">{start.earned}</TableCell>
        <TableCell className="p-3 text-left">{start.post}</TableCell>
        <TableCell className="p-3 text-left">
          <Badge
            label={start.status}
            color={start.status === "Ongoing" ? "text-green-600" : "text-red-600"}
            bgColor={start.status === "Ongoing" ? "bg-green-100" : "bg-red-100"}
          />
        </TableCell>
      </>
    );
  }

  // -------------------- Product Content --------------------
  if (type === "productContent") {
    const pc = item as ProductContent;
    return (
      <>
        <TableCell className="p-4 text-gray-500">
          <Button className="text-gray-400 min-w-0 p-1" onClick={() => setOpen(true)}>
            <Edit2 size={18} className="text-black" />
          </Button>
        </TableCell>
        <CampaignFormPopup isOpen={open} onClose={() => setOpen(false)} />
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src={pc.avatar} alt={pc.influencerName} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{pc.influencerName}</div>
              <div className="text-gray-500 text-xs">{pc.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3"><Badge label="Links" color="text-red-600" bgColor="bg-red-100" href="/campaign/123" /></TableCell>
        <TableCell className="p-3"><Badge label="Links" color="text-red-600" bgColor="bg-red-100" href="/campaign/123" /></TableCell>
        <TableCell className="p-3">{pc.type}</TableCell>
        <TableCell className="p-3">{pc.noOfPost}</TableCell>
        <TableCell className="p-3"><Badge label="Links" color="text-red-600" bgColor="bg-red-100" href={pc.productLink} /></TableCell>
        <TableCell className="p-3">{pc.deadline}</TableCell>
        <TableCell className="p-3"><Badge label={pc.status} color="text-green-600" bgColor="bg-green-100" /></TableCell>
      </>
    );
  }

  // -------------------- Budget --------------------
  if (type === "budget") {
    const budget = item as Budget;
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
              <Image src={budget.avatar} alt={budget.influencerName} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{budget.influencerName}</div>
              <div className="text-gray-500 text-xs">{budget.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">{budget.CPP}</TableCell>
        <TableCell className="p-3">{budget.CPS}</TableCell>
        <TableCell className="p-3">{budget.CPVID}</TableCell>
        <TableCell className="p-3">{budget.performanceHike}</TableCell>
        <TableCell className="p-3">{budget.spend}</TableCell>
        <TableCell className="p-3">
          <Badge
            label={budget.budget}
            color="text-green-700"
            bgColor="bg-green-100"
            onClick={() => setOpen(true)}
          />
        </TableCell>
        <BudgetPopup isOpen={open} onClose={() => setOpen(false)} />
      </>
    );
  }

  // -------------------- Product Sending --------------------
  if (type === "productSending") {
    const ps = item as ProductSending;
    return (
      <>
        <TableCell className="p-4 text-gray-500">
          <Button className="text-gray-400 hover:text-blue-500 min-w-0 p-1" onClick={() => setOpen(true)}>
            <Edit2 size={18} className="text-black" />
          </Button>
        </TableCell>
        <ProductPopup isOpen={open} onClose={() => setOpen(false)} />
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src={ps.avatar} alt={ps.influencerName} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{ps.influencerName}</div>
              <div className="text-gray-500 text-xs">{ps.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">{ps.product}</TableCell>
        <TableCell className="p-3">{ps.address}</TableCell>
        <TableCell className="p-3">{ps.noOfProduct}</TableCell>
        <TableCell className="p-3">{ps.trackingID}</TableCell>
        <TableCell className="Status">
          <Badge label={ps.status} color="text-green-700" bgColor="bg-green-100" />
        </TableCell>
      </>
    );
  }

  // -------------------- Review --------------------
  if (type === "review") {
    const review = item as Review;
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
              <Image src={review.avatar} alt={review.influencerName} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{review.influencerName}</div>
              <div className="text-gray-500 text-xs">{review.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">
          <Badge label={review.status} color="text-green-700" bgColor="bg-green-100" />
        </TableCell>
        <TableCell className="p-3">{review.contentType}</TableCell>
        <TableCell className="p-3">{review.noOfPost}</TableCell>
        <TableCell className="p-3">
          {review.approval.map((approval, index) => (
            <Badge key={index} label={approval} color="text-red-700" bgColor="bg-red-100" />
          ))}
        </TableCell>
        <TableCell className="p-3">
          <Badge label={review.submittedPost} color="text-black" bgColor="bg-white" />
        </TableCell>
      </>
    );
  }

  // -------------------- Campaign --------------------
  if (type === "campaign") {
    const camp = item as Campaign;
    return (
      <>
        <TableCell className="p-4"><Checkbox /></TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src={camp.avatar} alt={camp.influencerName} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{camp.influencerName}</div>
              <div className="text-gray-500 text-xs">{camp.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3"><Badge label="Links" color="text-red-600" bgColor="bg-red-100" href="/campaign/123" /></TableCell>
        <TableCell className="p-3">{camp.noOfPosts}</TableCell>
        <TableCell className="p-3">{camp.audience}</TableCell>
        <TableCell className="p-3">{camp.reach}</TableCell>
        <TableCell className="p-3">{camp.likes}</TableCell>
        <TableCell className="p-3">{camp.costPerEngagement}</TableCell>
        <TableCell className="p-3">{camp.engagement}</TableCell>
        <TableCell className="p-3">{camp.campaignSpend}</TableCell>
        <TableCell className="p-3">{camp.conversionRate}</TableCell>
        <TableCell className="p-3">{camp.roi}</TableCell>
        <TableCell className="p-3">{camp.revenueGenerated}</TableCell>
      </>
    );
  }

  // -------------------- Payment --------------------
  if (type === "payment") {
    const pay = item as Payment;
    return (
      <>
        <TableCell className="p-4"><Checkbox /></TableCell>
        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src={pay.avatar} alt={pay.influencerName} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{pay.influencerName}</div>
              <div className="text-gray-500 text-xs">{pay.influencerUsername}</div>
            </div>
          </div>
        </TableCell>
        <TableCell className="p-3">{pay.CPP}</TableCell>
        <TableCell className="p-3">{pay.CPS}</TableCell>
        <TableCell className="p-3">{pay.CPVID}</TableCell>
        <TableCell className="p-3">{pay.performanceHike}</TableCell>
        <TableCell className="p-3">{pay.spend}</TableCell>
        <TableCell className="p-3">{pay.date}</TableCell>
        <TableCell className="p-3">
          <Badge label={pay.status} color="text-green-700" bgColor="bg-green-100" />
        </TableCell>
        <TableCell className="p-3">
          <Badge
            label={pay.payment}
            color="text-white"
            bgColor="bg-green-900"
            onClick={() => setOpen(true)}
          />
        </TableCell>
        <PaymentPopup isOpen={open} onClose={() => setOpen(false)} />
      </>
    );
  }

  return null;
}
