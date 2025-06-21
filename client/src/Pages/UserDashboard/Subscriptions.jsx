
// File: /pages/UserDashboard/Subscriptions.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/subscriptions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubscriptions(res.data);
      } catch (err) {
        console.error("Error fetching subscriptions", err);
      }
    };

    fetchSubscriptions();
  }, [token]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">My Subscriptions</h2>
          <div className="bg-white rounded-xl shadow p-4">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="p-2 text-left">Plan</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Duration</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{sub.plan}</td>
                    <td className="p-2">₹{sub.amount}</td>
                    <td className="p-2">{sub.duration} months</td>
                    <td className="p-2">{sub.status || "Active"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
