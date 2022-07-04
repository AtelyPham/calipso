import React from 'react';

const Scores = ({ place }) => {
  return (
    <div className="space-y-4">
      <div className="px-24 pl-28">
        <h2 className="text-3xl font-bold">Scores</h2>
      </div>
      <div className="flex flex-row px-24">
        <div className="pl-4 pr-32">
          <div className="flex flex-row py-4 ">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl font-serif ml-2">Rating: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-16">
              <div className="absolute w-32 h-7 bg-[#6EE7B7] rounded-2xl "></div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-2xl">🌐</span>
            <span className="text-2xl font-serif ml-2">Wifi: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl mx-[5.4rem] ml-22">
              <div className="absolute w-20 h-7 bg-[#FCD34D] rounded-2xl "></div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-2xl">💦</span>
            <span className="text-2xl font-serif ml-2">Huminity: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-[1.8rem]">
              <div className="absolute w-12 h-7 bg-[#DC2626] rounded-2xl "></div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-2xl ">🚦</span>
            <span className="text-2xl font-serif ml-2">Traffic: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-[4.5rem]">
              <div className="absolute w-24 h-7 bg-[#FCD34D] rounded-2xl "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row py-4">
            <span className="text-2xl ">💸</span>
            <span className="text-2xl font-serif ml-2">Cost: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-16">
              <div className="absolute w-36 h-7 bg-[#6EE7B7] rounded-2xl "></div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-2xl ">😁</span>
            <span className="text-2xl font-serif ml-2">Fun: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-16">
              <div className="absolute w-40 h-7 bg-[#6EE7B7] rounded-2xl "></div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-2xl ">🔐</span>
            <span className="text-2xl font-serif ml-2">Safe: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-16">
              <div className="absolute w-28 h-7 bg-[#FCD34D] rounded-2xl "></div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <span className="text-2xl ">🥂</span>
            <span className="text-2xl font-serif ml-2">Nightlife: </span>
            <div className="w-48 h-7 bg-slate-200 rounded-2xl my-[0.2rem] ml-5">
              <div className="absolute w-32 h-7 bg-[#6EE7B7] rounded-2xl "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
