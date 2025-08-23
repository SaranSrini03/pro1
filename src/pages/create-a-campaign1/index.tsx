"use client";
import { GradientButton, useState } from "@/lib/imports";

export default function CampaignForm() {
  const [form, setForm] = useState({
    network: '',
    niche: '',
    age: '',
    location: '',
    followers: '',
    engagement: '',
    audienceMatch: '',
    influencerCount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-10 text-gray-800">

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-20">
          <GradientButton href="/your-campaign" label="Your Campaign" />

        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-10">Enter your campaign goals</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div>
            <label className="block text-sm mb-1">Network</label>
            <select
              name="network"
              value={form.network}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">Instagram, TikTok</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Niche</label>
            <select
              name="niche"
              value={form.niche}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">Fashion</option>
            </select>
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-sm mb-1">Age</label>
            <select
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">20-25</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Location</label>
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">Bangalore</option>
            </select>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm mb-1">Follower count</label>
            <select
              name="followers"
              value={form.followers}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">5000 - 10000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Eng rate</label>
            <select
              name="engagement"
              value={form.engagement}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">5 - 10%</option>
            </select>
          </div>

          {/* Row 4 */}
          <div>
            <label className="block text-sm mb-1">Influencer’s Followers matches</label>
            <select
              name="audienceMatch"
              value={form.audienceMatch}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">70% female, 20-25 age</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Number of influencers need for the campaign</label>
            <select
              name="influencerCount"
              value={form.influencerCount}
              onChange={handleChange}
              className="w-full bg-blue-50 px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">80</option>
            </select>
          </div>
        </form>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10">
          <GradientButton href="/create-a-campaign2" label="Next" />


        </div>
      </div>
    </div>
  );
}
