import { useState } from "react";
import { OverviewContent } from "../Components/OverviewContent";
import { Reports } from "../Components/Reports";
import { Demographics } from "../Components/Demographics";

const tabs = ["Overview", "Reports", "Demographics"];

export const Analytics = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full p-2 bg-[#0e0e0e] border">
      <div className="flex space-x-4 text-[1rem] font-semibold border-b border-gray-900 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "text-white border-b sm:border-0"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="m-6">
        {activeTab === "Overview" && <OverviewContent />}
      </div>
      <div className="m-6">{activeTab === "Reports" && <Reports />}</div>
      <div className="m-6">
        {activeTab === "Demographics" && <Demographics />}
      </div>
    </div>
  );
};

export default Analytics;
