import React from "react";
import Sidebar from "./Sidebar";
import StatsOverview from "../dashboard/StatsOverview";
import RecentActivity from "../dashboard/RecentActivity";

interface AdminLayoutProps {
  children?: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps = {}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6">{children}</div>
      </main>
    </div>
  );
}
