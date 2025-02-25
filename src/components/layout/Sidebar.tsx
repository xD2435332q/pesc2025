import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Building2,
  MapPin,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    label: "Properties",
    href: "/admin/properties",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Excursions",
    href: "/admin/excursions",
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Users",
    href: "/admin/users",
  },
];

const bottomNavItems: NavItem[] = [
  {
    icon: <Settings className="w-5 h-5" />,
    label: "Settings",
    href: "/admin/settings",
  },
  {
    icon: <LogOut className="w-5 h-5" />,
    label: "Logout",
    href: "/logout",
  },
];

const NavItem = ({ icon, label, href }: NavItem) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href}>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={cn(
          "w-full justify-start gap-3",
          isActive ? "bg-secondary" : "hover:bg-secondary/50",
        )}
      >
        {icon}
        {label}
      </Button>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-[280px] p-4 bg-background border-r">
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="w-8 h-8 rounded-full bg-primary" />
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>

      <nav className="flex-1 py-6 space-y-2">
        {mainNavItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>

      <Separator />

      <nav className="py-6 space-y-2">
        {bottomNavItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>
    </div>
  );
}
