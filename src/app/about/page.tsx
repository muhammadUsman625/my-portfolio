export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <span className="border-b-4 border-blue-600 pb-2">About Me</span>
      </h1>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Professional Summary</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Full Stack Developer with extensive experience in MEAN and MERN stack development.
              Currently working at TA SOLUTIONS, Karachi, where I develop and maintain scalable
              web applications using modern technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🎯</span>
                <span className="text-gray-700">Specialized in Angular and React.js development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">💻</span>
                <span className="text-gray-700">Expert in Node.js and Spring Boot</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🔧</span>
                <span className="text-gray-700">Strong problem-solving abilities</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Role</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">TA SOLUTIONS, Karachi</h3>
              <p className="text-gray-600 mb-4">Full Stack Developer | August 2020 - Present</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Develop user-facing features with Angular 2 and React.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Design and implement RESTful APIs using Java Spring Boot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Build scalable backend services with Node.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Manage data storage using MongoDB and MySQL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
