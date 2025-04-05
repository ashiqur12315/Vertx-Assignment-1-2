import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "Mar 1", value: 400 },
  { date: "Mar 5", value: 1200 },
  { date: "Mar 10", value: 900 },
  { date: "Mar 15", value: 700 },
  { date: "Mar 20", value: 1800 },
  { date: "Mar 25", value: 1100 },
  { date: "Mar 30", value: 1600 },
];
const chartOptions = ["Visitors", "Connections", "Interactions", "Impressions"];
const timeOptions = [
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "Last 7 days",
  "Last 30 days",
];
const addOptions = ["Connections", "Interactions", "Impressions"];

export const OverviewChart = () => {
  return (
    <div className="bg-black my-4 p-4 rounded-xl w-full">
      <div className="flex items-center gap-4 flex-wrap">
        <Dropdown title="Visitors" options={chartOptions} />
        <Dropdown title="Last 30 days" options={timeOptions} />
        <Dropdown title="+ Add" options={addOptions} />
      </div>

      
      <div className="flex gap-2 my-4">
        <h2 className="text-4xl font-bold text-white">13.49K</h2>
        <p className="text-green-400 text-sm">
          +469% <br /> <span className="text-gray-400">(897)</span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#1f1f1f" vertical={false} />
          <XAxis
            dataKey="date"
            stroke="#aaa"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#aaa"
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v / 1000}K`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              borderColor: "#333",
              color: "#fff",
            }}
            labelStyle={{ color: "#888" }}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center border border-[#333] px-5 py-1 text-sm font-medium text-white rounded-2xl hover:border-white focus:outline-none"
      >
        <p>{title}</p>
        <RiArrowDropDownLine className="w-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-44 origin-top-left rounded-md bg-[#0e0e0e] shadow-lg ring-1 ring-[#333] focus:outline-none">
          {options.map((option, index) => (
            <button
              key={index}
              className="text-white w-full text-left px-4 py-2 text-sm hover:bg-[#1a1a1a] rounded-md"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default OverviewChart;
