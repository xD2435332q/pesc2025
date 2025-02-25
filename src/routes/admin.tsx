import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/components/dashboard";
import Properties from "@/components/properties";
import Excursions from "@/components/excursions";
import Products from "@/components/products";
import Users from "@/components/users";
import Settings from "@/components/settings";

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="properties" element={<Properties />} />
        <Route path="excursions" element={<Excursions />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    </AdminLayout>
  );
}
