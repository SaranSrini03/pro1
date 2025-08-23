import {GradientButton} from "@/lib/imports";


export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Right Button */}
        <div className="flex justify-end mb-20">
          <GradientButton href="/your-campaign" label="Start a Campaign" />

        </div>

        {/* Welcome Heading */}
        <div className="mb-22">
          <h1 className="text-3xl font-bold">Welcome to new start of your growth!</h1>
        </div>

        {/* How it Works Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-2">How it works ?</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Nunc neque tincidunt urna enim blandit vitae.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { color: 'bg-purple-600' },
            { color: 'bg-orange-400' },
            { color: 'bg-yellow-400' },
            { color: 'bg-green-500' },
          ].map((step, i) => (
            <div key={i} className="flex flex-col text-left">
              <span className={`w-2 h-2 rounded-full ${step.color} mb-4`}></span>
              <hr className="w-full max-w-[80%] border-t border-gray-100 mb-4" />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">{`Step 0${i + 1}`}</h3>
              <h4 className="font-semibold mb-1">Heading goes here</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Quis in vitae fringilla aliquet viverra eget eu.
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-32">
          <GradientButton href="/create-a-campaign1" label="Create a Campaign" />
        </div>
      </div>
    </div>
  );
}
