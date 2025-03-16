import About from './about/page';
import Education from './education/page';
import Skills from './skills/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4">
        <div className="flex-1 text-center md:text-left max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-blue-600 inline-block">Muhammad Usman</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-600 font-semibold">
              Full Stack Developer
              <span className="block text-xl md:text-2xl mt-2 text-gray-500">MEAN | MERN</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Passionate about creating robust web applications using modern technologies.
              Specialized in Angular, React, Node.js, and Spring Boot development.
            </p>
            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 text-lg font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#about" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 text-lg font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <Education />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </>
  );
}
