import { TableCell, TableRow } from "@mui/material";

export default function TableHeader({ type }: { type: "influencers" | "productContent" | "budget" | "productSending" | "review" | "campaign" | "payment" }) {
  return (
    <TableRow className="text-left">
      {type === "influencers" ? (
        <>
          <TableCell className="p-3 w-10"></TableCell>
          <TableCell className="p-3">Name</TableCell>
          <TableCell className="p-3">Role</TableCell>
          <TableCell className="p-3">Invitation</TableCell>
          <TableCell className="p-3">Status</TableCell>
          <TableCell className="p-3 w-12"></TableCell>
        </>
      ) : type === "productContent" ? (
        <>
          <TableCell className="p-3 w-10"></TableCell>
          <TableCell className="p-3">Name</TableCell>
          <TableCell className="p-3">Product Details</TableCell>
          <TableCell className="p-3">Product Link</TableCell>
          <TableCell className="p-3">Type</TableCell>
          <TableCell className="p-3">No. of Posts</TableCell>
          <TableCell className="p-3">Guidelines</TableCell>
          <TableCell className="p-3">Deadline</TableCell>
          <TableCell className="p-3">Status</TableCell>
        </>
      ) : type === "budget" ? (
        <>
          <TableCell className="p-3 w-10"></TableCell>
          <TableCell className="p-3">Name</TableCell>
          <TableCell className="p-3">CPP</TableCell>
          <TableCell className="p-3">CPS</TableCell>
          <TableCell className="p-3">CPVID</TableCell>
          <TableCell className="p-3">Performance Hike</TableCell>
          <TableCell className="p-3">Spend</TableCell>
          <TableCell className="p-3">Budget</TableCell>
        </>
      ) : type === "productSending" ? (
        <>
          <TableCell className="p-3 w-10"></TableCell>
          <TableCell className="p-3">Name</TableCell>
          <TableCell className="p-3">Product</TableCell>
          <TableCell className="p-3">Shipping To</TableCell>
          <TableCell className="p-3">No Of Product</TableCell>
          <TableCell className="p-3">Tracking ID</TableCell>
          <TableCell className="p-3">Status</TableCell>
        </>
        ) : type === "review" ? (
            <>
            <TableCell className="p-3 w-10"></TableCell>
            <TableCell className="p-3">Name</TableCell>
            <TableCell className="p-3">Status</TableCell>
            <TableCell className="p-3">Content Type</TableCell>
            <TableCell className="p-3">No Of Reels</TableCell>
            <TableCell className="p-3">Approval</TableCell>
            <TableCell className="p-3">Submitted Post</TableCell>
            </>
        ) : type === "campaign" ? (
            <>
            <TableCell className="p-2 w-6"></TableCell>
            <TableCell className="p-2">Name</TableCell>
            <TableCell className="p-2">Post Link</TableCell>
            <TableCell className="p-2">No Of Post</TableCell>
            <TableCell className="p-2">Audience</TableCell>
            <TableCell className="p-2">Reach</TableCell>
            <TableCell className="p-2">Likes</TableCell>
            <TableCell className="p-2">Cost per Engagement</TableCell>
            <TableCell className="p-2">Engagement</TableCell>
            <TableCell className="p-2">Campaign Spend</TableCell>
            <TableCell className="p-2">Conversion Rate</TableCell>
            <TableCell className="p-2">ROI %</TableCell>
            <TableCell className="p-2">Revenue Generated</TableCell>
            </>
        ) : type === "payment" ? (
            <>
            <TableCell className="p-2 w-6"></TableCell>
            <TableCell className="p-2">Name</TableCell>
            <TableCell className="p-2">CPP</TableCell>
            <TableCell className="p-2">CPS</TableCell>
            <TableCell className="p-2">CPVID</TableCell>
            <TableCell className="p-2">Performance Hike</TableCell>
            <TableCell className="p-2">Spend</TableCell>
            <TableCell className="p-2">Date</TableCell>
            <TableCell className="p-2">Status</TableCell>
            <TableCell className="p-2">Payment</TableCell>
            </>
        ) : null
    }
    </TableRow>
  );
}
