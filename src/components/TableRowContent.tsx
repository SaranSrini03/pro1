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

          <Badge label={item.invitation} />

        </TableCell>
        <TableCell className="p-3">
          <Badge
            label={item.status}
            color={item.status === "Accepted" ? "text-green-600" : "text-red-600"}
            bgColor={item.status === "Accepted" ? "bg-green-100" : "bg-red-100"}
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
  // ---------------------------
  if (type === "start") {
    return (
      <>
        <TableCell className="p-3">
          <Checkbox />
        </TableCell>

        <TableCell className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-medium text-gray-900">{item.name}</span>
              <span className="text-gray-500 text-xs">{item.username}</span>
            </div>
          </div>
        </TableCell>

        <TableCell className="p-3 text-left">{item.audience}</TableCell>
        <TableCell className="p-3 text-left">{item.engRate}</TableCell>
        <TableCell className="p-3 text-left">{item.totalReach}</TableCell>

        <TableCell className="p-3 text-left">
          <TableCell className="p-3">
            <Badge label="Links" color="text-green-600" bgColor="bg-green-100" href="/campaign/123" />
          </TableCell>
        </TableCell>

        <TableCell className="p-3 text-left">{item.earned}</TableCell>
        <TableCell className="p-3 text-left">{item.post}</TableCell>

        <TableCell className="p-3 text-left">
          <Badge
            label={item.status}
            color={item.status === "Ongoing" ? "text-green-600" : "text-red-600"}
            bgColor={item.status === "Ongoing" ? "bg-green-100" : "bg-red-100"}
          />
        </TableCell>
      </>
    );
  }

  // ----------------------------------
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
        <TableCell className="p-3">
          <Badge label="Links" color="text-red-600" bgColor="bg-red-100" href="/campaign/123" />
        </TableCell>
        <TableCell className="p-3"><Badge label="Links" color="text-red-600" bgColor="bg-red-100" href="/campaign/123" /></TableCell>
        <TableCell className="p-3">{item.type}</TableCell>
        <TableCell className="p-3">{item.noOfPost}</TableCell>
        <TableCell className="p-3"><Badge label="Links" color="text-red-600" bgColor="bg-red-100" href={item.productLink} /></TableCell>
        <TableCell className="p-3">{item.deadline}</TableCell>
        <TableCell className="p-3"><Badge label={item.status} color="text-green-600" bgColor="bg-green-100" /></TableCell>

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
          <Badge
            label={item.budget}
            color="text-green-700"
            bgColor="bg-green-100"
            onClick={() => setOpen(true)}
          />

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
        <TableCell className="Status">
          <Badge
            label={item.status}
            color="text-green-700"
            bgColor="bg-green-100"
          />
        </TableCell>
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
        <TableCell className="p-3">
          <Badge
            label={item.status}
            color="text-green-700"
            bgColor="bg-green-100"
          />
        </TableCell>
        <TableCell className="p-3">{item.contentType}</TableCell>
        <TableCell className="p-3">{item.noOfPost}</TableCell>
        <TableCell className="p-3">
          {item.approval.map((approval: string, index: number) => (
            <Badge
              key={index}
              label={approval}
              color="text-red-700"
              bgColor="bg-red-100"
            />
          ))}
        </TableCell>
        <TableCell className="p-3">
          <Badge
            label={item.submittedPost}
            color="text-black"
            bgColor="bg-white"
          />
        </TableCell>
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
        <TableCell className="p-3">
          <Badge label="Links" color="text-red-600" bgColor="bg-red-100" href="/campaign/123" />
        </TableCell>

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
        <TableCell className="p-3">
          <Badge
            label={item.status}
            color="text-green-700"
            bgColor="bg-green-100"
          />
        </TableCell>

        {/* Payment */}
        <TableCell className="p-3">
          <Badge
            label={item.payment}
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
