import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { CalendarDays, Package, Home, Map } from "lucide-react";

interface Activity {
  id: string;
  type: "property" | "excursion" | "product" | "user";
  action: "created" | "updated" | "deleted";
  item: string;
  user: string;
  date: string;
}

interface RecentActivityProps {
  activities?: Activity[];
}

const defaultActivities: Activity[] = [
  {
    id: "1",
    type: "property",
    action: "created",
    item: "Luxury Beach Villa",
    user: "John Doe",
    date: "2024-03-20 14:30",
  },
  {
    id: "2",
    type: "excursion",
    action: "updated",
    item: "Mountain Hiking Tour",
    user: "Jane Smith",
    date: "2024-03-20 13:15",
  },
  {
    id: "3",
    type: "product",
    action: "deleted",
    item: "Beach Umbrella Set",
    user: "Mike Johnson",
    date: "2024-03-20 12:45",
  },
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "property":
      return <Home className="h-4 w-4" />;
    case "excursion":
      return <Map className="h-4 w-4" />;
    case "product":
      return <Package className="h-4 w-4" />;
    case "user":
      return <CalendarDays className="h-4 w-4" />;
  }
};

const getActionColor = (action: Activity["action"]) => {
  switch (action) {
    case "created":
      return "bg-green-100 text-green-800";
    case "updated":
      return "bg-blue-100 text-blue-800";
    case "deleted":
      return "bg-red-100 text-red-800";
  }
};

const RecentActivity = ({
  activities = defaultActivities,
}: RecentActivityProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getActivityIcon(activity.type)}
                    <span className="capitalize">{activity.type}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getActionColor(activity.action)}
                  >
                    {activity.action}
                  </Badge>
                </TableCell>
                <TableCell>{activity.item}</TableCell>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
