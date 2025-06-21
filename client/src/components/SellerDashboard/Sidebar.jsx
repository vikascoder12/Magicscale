// File: /components/Sidebar.jsx
import React from "react";
import { Users, FileText, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Customers", icon: <Users />, path: "/seller/customers" },
    { label: "Subscriptions", icon: <FileText />, path: "/seller/subscriptions" },
    { label: "Logout", icon: <LogOut />, path: "/logout" },
  ];

  return (
    <div className="w-60 h-screen bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-8 text-red-500">Magic_Scale</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-red-50 cursor-pointer">
              {item.icon}
              <span className="text-gray-700">{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;