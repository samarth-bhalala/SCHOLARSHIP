// src/components/StudentDashboard/StudentDashboard.tsx

import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import FeaturedScholarships from "./FeaturedScholarships";

const StudentDashboard = () => {
  return (
    <div className="p-6">
      <DashboardHeader />
      <DashboardStats />
      <FeaturedScholarships />
    </div>
  );
};

export default StudentDashboard;
