"use client"
import { Link, SearchSortBar} from "@/lib/imports";

export default function YourCampaignPage() {
    const campaigns = [
        { name: "Beauty product", start: "28/12/2024", influencers: 58, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "Active" },
        { name: "Beauty product", start: "28/12/2024", influencers: 78, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "Active" },
        { name: "Cosmetic product", start: "28/12/2024", influencers: 55, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 60, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 20, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 28, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 75, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 60, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "End" },
        { name: "Beauty product", start: "28/12/2024", influencers: 40, reach: "15M", impression: "1M", platform: "Instagram, Tik Tok", budget: 30000, posts: 15, spent: 20000, end: "15/01/2025", status: "Active" },
    ];

    return (
        <div className="min-h-screen w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6">
            <div className="max-w-full lg:max-w-7xl mx-auto">
                <SearchSortBar />

                <div className="p-4 sm:p-6 md:p-8">
                    <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-black">All campaigns</h1>
                    
                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border-collapse text-xs sm:text-sm">
                            <thead className="bg-gray-50 text-left text-gray-500">
                                <tr>
                                    <th className="p-2 sm:p-3">Campaign Name</th>
                                    <th className="p-2 sm:p-3">Start date</th>
                                    <th className="p-2 sm:p-3">Influencers</th>
                                    <th className="p-2 sm:p-3">Reach</th>
                                    <th className="p-2 sm:p-3">Impression</th>
                                    <th className="p-2 sm:p-3">Platform</th>
                                    <th className="p-2 sm:p-3">Budget</th>
                                    <th className="p-2 sm:p-3">Posts</th>
                                    <th className="p-2 sm:p-3">Spent</th>
                                    <th className="p-2 sm:p-3">Ends</th>
                                    <th className="p-2 sm:p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((c, i) => (
                                    <tr key={i} className="border-b text-gray-500 hover:bg-gray-50">
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">
                                            <Link
                                                href={`/p/${c.name.toLowerCase().replace(/\s+/g, "-")}/influencers`}
                                                className="text-gray-900 hover:underline"
                                            >
                                                {c.name}
                                            </Link>
                                        </td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.start}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.influencers}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.reach}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.impression}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.platform}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.budget}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.posts}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.spent}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">{c.end}</td>
                                        <td className="p-2 sm:p-3 md:p-4 lg:p-5">
                                            <span
                                                className={`px-2 py-1 text-xs rounded-full ${c.status === "Active"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {c.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                        {campaigns.map((c, i) => (
                            <div key={i} className="border rounded-lg p-4 bg-white shadow-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <Link
                                        href={`/p/${c.name.toLowerCase().replace(/\s+/g, "-")}/influencers`}
                                        className="font-medium text-gray-900 hover:underline"
                                    >
                                        {c.name}
                                    </Link>
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${c.status === "Active"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {c.status}
                                    </span>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-gray-800 text-xs">Start</p>
                                        <p className="text-gray-600">{c.start}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 text-xs">Ends</p>
                                        <p className="text-gray-600">{c.end}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Influencers</p>
                                        <p className="text-gray-600">{c.influencers}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Reach</p>
                                        <p className="text-gray-600">{c.reach}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Impression</p>
                                        <p className="text-gray-600">{c.impression}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Platform</p>
                                        <p className=" text-gray-500 truncate">{c.platform}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Budget</p>
                                        <p className="text-gray-600">{c.budget}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Spent</p>
                                        <p className="text-gray-600">{c.spent}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Posts</p>
                                        <p className="text-gray-600">{c.posts}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}