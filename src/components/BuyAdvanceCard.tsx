import React from 'react';

function BuyAdvanceCard() {
  return (
    <div className="flex items-center justify-between bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
      {/* Left Side */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Advance</h2>
        <p className="text-sm text-white/80">Top-tier support for serious job hunters:</p>
        <div className="h-1 w-20 bg-yellow-400 mt-2 mb-4"></div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          {[
            "Everything in Plus",
            "Custom Resumes & Cover Letters",
            "20 fully customized applications/week",
            "Help with complex job searches",
            "Access to senior resume experts, Founder & Exec Coaches"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 min-w-[250px]">
              <span className="bg-green-400 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col align-middle items-end h-full">
          
            <div className="text-4xl font-bold">
                <span className="text-2xl">$</span>150
                <span className="text-lg font-normal">/week</span>
            </div>
            <div>
            <button
                type="button"
                className="bg-white text-blue-600 font-semibold py-2 px-5 rounded-full hover:bg-gray-100 transition"
            >
                Get Started →
            </button>
            </div>
          
    </div>

    </div>
  );
}

export default BuyAdvanceCard;

