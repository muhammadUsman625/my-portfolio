export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <span className="border-b-4 border-blue-600 pb-2">Education</span>
      </h1>
      
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-blue-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Science</h2>
                <p className="text-blue-600 font-semibold">Computer Science</p>
                <p className="text-gray-600 mt-2">Iqra University</p>
                <p className="text-gray-500">February 2016 - April 2020</p>
                <div className="mt-4 inline-block bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-600 font-medium">CGPA: 3.01</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements & Coursework</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Core Competencies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Strong foundation in programming fundamentals and algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Advanced problem-solving and analytical skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Comprehensive understanding of computer science principles</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Notable Projects</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Developed full-stack applications using modern technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Implemented database solutions for various academic projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
