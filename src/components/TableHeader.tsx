import { TableCell, TableRow } from "@/lib/imports";

export default function TableHeader({ type }: { type: "influencers" | "start" | "productContent" | "budget" | "productSending" | "review" | "campaign" | "payment" }) {
  return (
    <TableRow className="text-left">
      {type === "influencers" ? (
        <>
          <TableCell className="p-3 w-1 TableCell"></TableCell>
          <TableCell className="p-3 TableCell">Name</TableCell>
          <TableCell className="p-3 TableCell ">Role</TableCell>
          <TableCell className="p-3 TableCell">Invitation</TableCell>
          <TableCell className="p-3 TableCell">Status</TableCell>
          <TableCell className="p-3 w-12 TableCell"></TableCell>
        </>

      ) : type === "start" ? (
        <>
          <TableCell className="p-3 w-1 TableCell"></TableCell>
          <TableCell className="p-3 TableCell">Name</TableCell>
          <TableCell className="p-3 TableCell">Audience</TableCell>
          <TableCell className="p-3 TableCell">ENG Rate</TableCell>
          <TableCell className="p-3 TableCell">Total Reach</TableCell>
          <TableCell className="p-3 TableCell">Link</TableCell>
          <TableCell className="p-3 TableCell">Earned</TableCell>
          <TableCell className="p-3 TableCell">Posts</TableCell>
          <TableCell className="p-3 TableCell">Status</TableCell>
        </>
      ) : type === "productContent" ? (
        <>
          <TableCell className="p-3 w-10 TableCell"></TableCell>
          <TableCell className="p-3 TableCell">Name</TableCell>
          <TableCell className="p-3 TableCell">Product Details</TableCell>
          <TableCell className="p-3 TableCell">Product Link</TableCell>
          <TableCell className="p-3 TableCell">Type</TableCell>
          <TableCell className="p-3 TableCell">No. of Posts</TableCell>
          <TableCell className="p-3 TableCell">Guidelines</TableCell>
          <TableCell className="p-3 TableCell">Deadline</TableCell>
          <TableCell className="p-3 TableCell">Status</TableCell>
        </>
      ) : type === "budget" ? (
        <>
          <TableCell className="p-3 w-10 TableCell"></TableCell>
          <TableCell className="p-3 TableCell">Name</TableCell>
          <TableCell className="p-3 TableCell">CPP</TableCell>
          <TableCell className="p-3 TableCell">CPS</TableCell>
          <TableCell className="p-3 TableCell">CPVID</TableCell>
          <TableCell className="p-3 TableCell">Performance Hike</TableCell>
          <TableCell className="p-3 TableCell">Spend</TableCell>
          <TableCell className="p-3 TableCell">Budget</TableCell>
        </>
      ) : type === "productSending" ? (
        <>
          <TableCell className="p-3 w-10 TableCell"></TableCell>
          <TableCell className="p-3 TableCell">Name</TableCell>
          <TableCell className="p-3 TableCell">Product</TableCell>
          <TableCell className="p-3 TableCell">Shipping To</TableCell>
          <TableCell className="p-3 TableCell">No Of Product</TableCell>
          <TableCell className="p-3 TableCell">Tracking ID</TableCell>
          <TableCell className="p-3 TableCell">Status</TableCell>
        </>
      ) : type === "review" ? (
        <>
          <TableCell className="p-3 w-10 TableCell"></TableCell>
          <TableCell className="p-3 TableCell">Name</TableCell>
          <TableCell className="p-3 TableCell">Status</TableCell>
          <TableCell className="p-3 TableCell">Content Type</TableCell>
          <TableCell className="p-3 TableCell">No Of Reels</TableCell>
          <TableCell className="p-3 TableCell">Approval</TableCell>
          <TableCell className="p-3 TableCell">Submitted Post</TableCell>
        </>
      ) : type === "campaign" ? (
        <>
          <TableCell className="p-2 w-6 TableCell"></TableCell>
          <TableCell className="p-2 TableCell">Name</TableCell>
          <TableCell className="p-2 TableCell">Post Link</TableCell>
          <TableCell className="p-2 TableCell">No Of Post</TableCell>
          <TableCell className="p-2 TableCell">Audience</TableCell>
          <TableCell className="p-2  TableCell">Reach</TableCell>
          <TableCell className="p-2 TableCell">Likes</TableCell>
          <TableCell className="p-2 TableCell">Cost per Engagement</TableCell>
          <TableCell className="p-2 TableCell">Engagement</TableCell>
          <TableCell className="p-2 TableCell">Campaign Spend</TableCell>
          <TableCell className="p-2 TableCell">Conversion Rate</TableCell>
          <TableCell className="p-2 TableCell">ROI %</TableCell>
          <TableCell className="p-2 TableCell">Revenue Generated</TableCell>
        </>
      ) : type === "payment" ? (
        <>
          <TableCell className="p-2 w-6 TableCell"></TableCell>
          <TableCell className="p-2 TableCell">Name</TableCell>
          <TableCell className="p-2 TableCell">CPP</TableCell>
          <TableCell className="p-2 TableCell">CPS</TableCell>
          <TableCell className="p-2 TableCell">CPVID</TableCell>
          <TableCell className="p-2 TableCell">Performance Hike</TableCell>
          <TableCell className="p-2 TableCell">Spend</TableCell>
          <TableCell className="p-2 TableCell">Date</TableCell>
          <TableCell className="p-2 TableCell">Status</TableCell>
          <TableCell className="p-2 TableCell">Payment</TableCell>
        </>
      ) : null
      }
    </TableRow>
  );
}
