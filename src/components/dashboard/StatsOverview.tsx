import React from "react";
import { Card } from "@/components/ui/card";
import { Building2, Users, Palmtree, ShoppingBag } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  change?: number;
}

const StatCard = ({ title, value, icon, change = 0 }: StatCardProps) => {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p
            className={`text-sm mt-2 ${change >= 0 ? "text-green-600" : "text-red-600"}`}
          >
            {change >= 0 ? "+" : ""}
            {change}% from last month
          </p>
        </div>
        <div className="p-4 bg-primary/10 rounded-full">{icon}</div>
      </div>
    </Card>
  );
};

interface StatsOverviewProps {
  stats?: {
    properties: number;
    users: number;
    excursions: number;
    products: number;
    changes?: {
      properties: number;
      users: number;
      excursions: number;
      products: number;
    };
  };
}

const StatsOverview = ({
  stats = {
    properties: 145,
    users: 2890,
    excursions: 67,
    products: 234,
    changes: {
      properties: 12,
      users: 8,
      excursions: -3,
      products: 15,
    },
  },
}: StatsOverviewProps) => {
  return (
    <div className="w-full bg-background p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Properties"
          value={stats.properties}
          icon={<Building2 className="h-6 w-6 text-primary" />}
          change={stats.changes?.properties}
        />
        <StatCard
          title="Total Users"
          value={stats.users}
          icon={<Users className="h-6 w-6 text-primary" />}
          change={stats.changes?.users}
        />
        <StatCard
          title="Total Excursions"
          value={stats.excursions}
          icon={<Palmtree className="h-6 w-6 text-primary" />}
          change={stats.changes?.excursions}
        />
        <StatCard
          title="Total Products"
          value={stats.products}
          icon={<ShoppingBag className="h-6 w-6 text-primary" />}
          change={stats.changes?.products}
        />
      </div>
    </div>
  );
};

export default StatsOverview;
