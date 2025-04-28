
const ChooseBox = () => {
  return (
    <div className="ml-1 w-50 rounded-2xl border border-blue-900 bg-blue-50 p-4 flex flex-col items-center">
      <div className="flex justify-center mb-2">
        <svg 
          className="w-10 h-10 text-blue-900" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M15 7l-3 3-3-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 10l3 3 3-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="text-center">
        <h3 className="text-blue-900 font-bold text-lg mb-1">Tried. Tested. Trusted</h3>
        <p className="text-blue-900 text-sm">
          Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
        </p>
      </div>
    </div>
  );
};

export default ChooseBox;