export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Web Developer | Designer | Creator
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View My Work
            </a>
            <a href="#contact" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-600 text-lg">
          I'm a passionate developer with experience in building web applications.
          I love creating beautiful and functional websites that solve real problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of your first project</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of your second project</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Email: your.email@example.com</p>
          <p className="text-gray-600">GitHub: github.com/yourusername</p>
        </div>
      </section>
    </main>
  );
}