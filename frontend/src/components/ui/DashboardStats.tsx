// src/components/StudentDashboard/DashboardStats.tsx

const stats = [
  { label: "Total Scholarships", value: 247, note: "Available scholarships" },
  { label: "Eligible For", value: 23, note: "Based on your profile" },
  
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-4">
          <div className="text-xl font-bold">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
          <div className="text-xs text-muted-foreground">{stat.note}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
