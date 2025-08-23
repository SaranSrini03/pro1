// types.ts

export interface Influencer {
  avatar: string;
  name: string;
  username: string;
  role: string;
  invitation: string;
  status: "Accepted" | "Rejected" | string;
}

export interface Start {
  avatar: string;
  name: string;
  username: string;
  audience: string;
  engRate: string;
  totalReach: string;
  earned: string;
  post: string;
  status: "Ongoing" | "Completed" | string;
}

export interface ProductContent {
  avatar: string;
  influencerName: string;
  influencerUsername: string;
  type: string;
  noOfPost: string;
  productLink: string;
  deadline: string;
  status: string;
  name?: string;
}

export interface Budget {
  avatar: string;
  influencerName: string;
  influencerUsername: string;
  CPP: string;
  CPS: string;
  CPVID: string;
  performanceHike: string | number;
  spend: string | number;
  budget: string | number;
  name?: string;
}

export interface ProductSending {
  avatar: string;
  influencerName: string;
  influencerUsername: string;
  product: string;
  address: string;
  noOfProduct: string;
  trackingID: string;
  status: string;
  name?: string;
}

export interface Review {
  avatar: string;
  influencerName: string;
  influencerUsername: string;
  status: string;
  contentType: string;
  noOfPost: string;
  approval: string[];
  submittedPost: string;
  name?: string;
}

export interface Campaign {
  avatar: string;
  influencerName: string;
  influencerUsername: string;
  noOfPosts: string | number;
  audience: string | number;
  reach: string | number;
  likes: string | number;
  costPerEngagement: string | number;
  engagement: string | number;
  campaignSpend: string | number;
  conversionRate: string | number;
  roi: string | number;
  revenueGenerated: string | number;
  name?: string;
}

export interface Payment {
  avatar: string;
  influencerName: string;
  influencerUsername: string;
  CPP: string;
  CPS: string;
  CPVID: string;
  performanceHike: string;
  spend: string;
  date: string;
  status: string;
  payment: string;
  name?: string;
}

// Union type
export type TableRowItem =
  | Influencer
  | Start
  | ProductContent
  | Budget
  | ProductSending
  | Review
  | Campaign
  | Payment;

export type TableType =
  | "influencers"
  | "start"
  | "productContent"
  | "budget"
  | "productSending"
  | "review"
  | "campaign"
  | "payment";
