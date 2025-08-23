// app/influencers/page.jsx
"use client";
import { Sidebar, Header } from "@/lib/imports";

export default function InfluencersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-sm">
      {/* Header at the top */}
      <Header />

      {/* Content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white shadow-md rounded-lg h-auto md:h-[90vh] w-full max-w-4xl xl:w-[1000px] flex flex-col">
            {/* Title */}
            <div className="flex text-black justify-between items-center px-4 py-3 sm:px-6 sm:py-4">
              <h1 className="text-center flex-1 text-base sm:text-lg font-semibold">
                Terms and conditions
              </h1>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-gray-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
              {`These Terms and Conditions ("Agreement") govern the collaboration between [Brand Name] ("Brand") and [Influencer Name] ("Influencer") for the campaign titled [Campaign Name]. The Influencer agrees to create and publish content, including posts, videos, or stories, as specified by the Brand, while adhering to the provided guidelines and including required elements such as hashtags, tags, captions, and product links. All content drafts must be submitted for the Brand's review and approval prior to publication, and the Brand reserves the right to request revisions or reject any content that does not meet campaign objectives. The Influencer will ensure timely submission of drafts and publication of approved content by the agreed deadlines. Compensation for the campaign will be [Insert Payment Details], with payments processed within [X days] after approval or completion. Performance metrics such as reach, impressions, and engagement rates will be tracked by the Brand, and the Influencer agrees to provide necessary access or reports. Confidentiality regarding all campaign-related information, including the Brand and products, must be maintained, and any unauthorized disclosures are prohibited. The Brand may terminate this Agreement if deadlines, deliverables, or guidelines are not met, and unapproved or unused content cannot be published by the Influencer without authorization. Content created for the campaign may be used by the Brand for promotional purposes, as agreed. The Influencer indemnifies the Brand against any claims arising from unauthorized or misleading content. Both parties agree to act professionally and cooperatively, with the Agreement governed by the laws of [Insert Jurisdiction]. By accepting these terms, both parties confirm their understanding and consent to the conditions outlined in this Agreement.`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}