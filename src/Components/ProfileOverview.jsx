import React from "react";
import { ProfileCard } from "./ProfileCard";
import { FoundedCompaniesCard } from "./FoundedComapnies";
import { ExperienceCard } from "./ProfileExperience";

export const ProfileOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-white">Overview</h1>
      <ProfileCard />

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <FoundedCompaniesCard />
          <ExperienceCard />
      </div>
    </div>
  );
};

export default ProfileOverview;
