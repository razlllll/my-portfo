import react from "react";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-md shadow-lg border-b border-white/10">
      <nav className="flex justify-between px-8 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-teal-400">Razal&apos;s Portfolio</h1>
        <ul className="flex space-x-6 text-sm tracking-wide text-white font-medium">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-teal-300 transition duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
