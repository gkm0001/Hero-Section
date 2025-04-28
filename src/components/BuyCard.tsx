import React from 'react';

function BuyCard() {
  return (
    <div className="flex justify-center w-70">
      <div className="flex flex-col rounded-2xl border border-blue-500 p-8 max-w-sm w-full">
        <div className="mb-6">
          <p className="text-blue-600 font-semibold text-lg">April Promo</p>
          <h1 className="items-baseline text-5xl font-bold text-blue-600 mt-2">
            <span className="text-4xl">$</span>35
            <span className="text-xl font-normal ">/week</span>
          </h1>
        </div>

        <hr className="border-t border-gray-200 my-4" />

        <ul className="flex flex-col gap-4 text-blue-900 text-sm">
          {[
            "Curated jobs from 1M+ listings, refreshed every 48 hours",
            "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
            "Need more? Add extra apps for just $1.5 each",
            "Your own dedicated application analyst",
            "Personalized with up to 10 filters & 5 job titles"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="p-1 bg-green-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="green"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
 
     
       <button
          type="button"
          className="mt-8 w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
        >
          Get Started →
        </button>
     
       
      </div>
    </div>
  );
}

export default BuyCard;
