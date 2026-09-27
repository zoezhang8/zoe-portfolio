const links = ["about", "experience", "projects", "contact"];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-background px-6 py-4">
      <a href="#top" className="font-semibold">
        zoe zhang
      </a>
      <ul className="flex gap-6">
        {links.map((id, i) => (
          <li key={id}>
            <a href={`#${id}`}>
              0{i + 1} {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}