import React from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import DashboardCard from "../../components/userDashboard/DashboardCard";
import { ShoppingCart, Star, Clock } from "lucide-react";


const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Total Orders"
            value="122"
            icon={<ShoppingCart className="h-5 w-5" />}
          />
          <DashboardCard
            title="Favorite Items"
            value="8"
            icon={<Star className="h-5 w-5" />}
          />
          <DashboardCard
            title="Recent Orders"
            value="3"
            icon={<Clock className="h-5 w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
