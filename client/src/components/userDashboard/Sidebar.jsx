// File: /src/components/Sidebar.jsx
import React from "react";
import { Home, ShoppingCart, User, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Home", icon: <Home size={20} />, path: "/" },
    { label: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
    { label: "Profile", icon: <User size={20} />, path: "/profile" },
    { label: "Logout", icon: <LogOut size={20} />, path: "/logout" },
  ];

  return (
    <div className="w-60 h-screen bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-8 text-red-500">Magic_Scale</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg ${
                  isActive ? "bg-red-100 text-red-500 font-semibold" : "text-gray-700"
                } hover:bg-red-50`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
