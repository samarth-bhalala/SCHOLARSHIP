// src/components/StudentDashboard/FeaturedScholarships.tsx

const scholarships = [
  {
    title: "STEM Excellence Scholarship",
    description: "For outstanding students in science, technology, engineering, and mathematics.",
    deadline: "June 30, 2024",
  },
  {
    title: "Women in Tech Grant",
    description: "Supporting women pursuing careers in technology fields.",
    deadline: "July 15, 2024",
  },
  {
    title: "Community Service Award",
    description: "For students with exceptional community service records.",
    deadline: "August 1, 2024",
  },
];

const FeaturedScholarships = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">🎓 Featured Scholarships</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Handpicked opportunities that match your profile
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {scholarships.map((sch, idx) => (
          <div key={idx} className="border p-4 rounded-xl bg-blue-50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="font-bold text-blue-900 text-lg mb-1">{sch.title}</div>
              <div className="text-blue-800 text-sm mb-2">{sch.description}</div>
              <div className="text-xs text-blue-700 mb-2">Deadline: {sch.deadline}</div>
            </div>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm font-semibold">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedScholarships;
  