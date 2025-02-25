import React from "react";
import StatsOverview from "./StatsOverview";
import RecentActivity from "./RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <StatsOverview />
      <RecentActivity />
    </div>
  );
}
