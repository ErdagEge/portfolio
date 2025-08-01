import { FaGithub, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
      <p className="text-gray-700">
        Let’s connect! Whether you have a question, want to collaborate, or just want to say hi — I’m always happy to chat about tech, games, or ideas.
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:egeerdag@gmail.com"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          <FaEnvelope className="mr-2" /> egeerdag@gmail.com
        </a>
        <a
          href="https://github.com/ErdagEge"
          target="_blank"
          className="inline-flex items-center text-gray-700 hover:text-black"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/egeerdag/"
          target="_blank"
          className="inline-flex items-center text-blue-700 hover:underline"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a
          href="https://open.spotify.com/show/5IkatgeB5ZBbbAADZC9Tty?si=fd4e98f5a23d495f"
          target="_blank"
          className="inline-flex items-center text-green-600 hover:underline"
        >
          <FaSpotify className="mr-2" /> Açık Büfe Diyalog (Podcast)
        </a>
      </div>
    </section>
  );
}
