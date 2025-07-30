import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-gray-600 my-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-gray-100 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 space-x-4 text-sm">
              {project.github && <a href={project.github} className="text-blue-600 hover:underline" target="_blank">GitHub</a>}
              {project.live && <a href={project.live} className="text-green-600 hover:underline" target="_blank">Live</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
