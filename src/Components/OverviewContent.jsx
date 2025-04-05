import React from "react";
import { OverviewChart } from "./OverviewChart";
import { Insights } from "./Insights";
import Demographics from "./Demographics";

export const OverviewContent = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-white">Overview</h1>
      <div className="lg:flex gap-4">
        <OverviewChart />
        <Insights />
      </div>
      <Demographics />
    </>
  );
};

export default OverviewContent;
