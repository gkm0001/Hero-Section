import React from "react";



const ClientFeebackBox =  () => {
  return (
    <div className="w-60 rounded-xl border-2 border-[#0649E7] overflow-hidden flex flex-col justify-between bg-[#0649E7]">
      <div className="h-40 flex items-center justify-center bg-white rounded-b-2xl rounded-bl-2xl">
        <button className="bg-[#0649E7] p-3 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.5 5.5a1 1 0 011.5-.86l7 4.5a1 1 0 010 1.72l-7 4.5A1 1 0 016.5 14V5.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="bg-[#0649E7] p-5 text-white relative">
        <div className="text-sm">helly is a 
           <span className="font-semibold m-1">senior executive</span>
           who got over
           <span className="font-semibold m-1">10 job interviews</span> 
             and an offer she accepted
        </div>
        <button className="bottom-4 bg-white text-[#0649E7] rounded-full p-2 mt-8 flex">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClientFeebackBox;
