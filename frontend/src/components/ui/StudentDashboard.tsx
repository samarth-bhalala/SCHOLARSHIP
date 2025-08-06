// src/components/StudentDashboard/StudentDashboard.tsx

import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import FeaturedScholarships from "./FeaturedScholarships";

const StudentDashboard = () => {
  return (
    <div className="flex justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white/90 rounded-2xl shadow-lg p-8">
        <DashboardHeader />
        <DashboardStats />
        <FeaturedScholarships />
      </div>
    </div>
  );
};

export default StudentDashboard;
