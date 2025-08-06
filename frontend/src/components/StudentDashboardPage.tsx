import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StudentDashboard from "./ui/StudentDashboard";
import { User, LayoutDashboard, Search, Settings } from "lucide-react";
import Profile from "./ui/Profile";
import SettingsPage from "./ui/SettingsPage";
import SearchAndApply from "./ui/SearchAndApply";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5 mr-1" /> },
  { key: "profile", label: "Profile", icon: <User className="w-5 h-5 mr-1" /> },
  { key: "search", label: "Search & Apply", icon: <Search className="w-5 h-5 mr-1" /> },
  { key: "settings", label: "Settings", icon: <Settings className="w-5 h-5 mr-1" /> },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StudentDashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const tab = query.get("tab") || "dashboard";

  const handleNav = (key: string) => {
    navigate(`?tab=${key}`);
  };

  const renderPage = () => {
    switch (tab) {
      case "profile":
        return <Profile />;
      case "search":
        return <SearchAndApply />;
      case "settings":
        return <SettingsPage />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Navigation */}
      <nav className="sticky top-0 z-40 bg-blue-900 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between h-16">
            <span className="text-xl font-bold text-white mb-2 md:mb-0">Scholar Booster</span>
            <div className="flex flex-wrap items-center space-x-0 md:space-x-1 w-full md:w-auto">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  className={`flex items-center font-medium px-4 py-2 rounded w-full md:w-auto mb-1 md:mb-0 md:mr-1 last:mr-0 transition-colors duration-150 ${
                    tab === item.key
                      ? "bg-white text-blue-900"
                      : "text-white hover:bg-blue-800"
                  }`}
                  onClick={() => handleNav(item.key)}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Render selected subpage */}
      {renderPage()}
    </div>
  );
};

export default StudentDashboardPage;