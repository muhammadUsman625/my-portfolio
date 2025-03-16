const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-6 text-gray-800">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <p className="text-gray-700 font-medium text-center">{skill}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = {
    "Frontend Development": [
      "Angular 2",
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design"
    ],
    "Backend Development": [
      "Java Spring Boot",
      "Node.js",
      "Express.js",
      "Adonis.js",
      "RESTful APIs"
    ],
    "Database Management": [
      "MongoDB",
      "MySQL",
      "Database Modeling",
      "Query Optimization"
    ],
    "Other Skills": [
      "Git",
      "Firebase",
      "Agile Development",
      "Jira",
      "Problem Solving"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <span className="border-b-4 border-blue-600 pb-2">My Skills</span>
      </h1>
      
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </div>
  );
}
