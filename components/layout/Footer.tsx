export default function Footer() {
  return (
    <footer
      className="border-t border-neutral-800 bg-neutral-950 py-12"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm font-bold tracking-tight text-white">
            Oudtech
          </p>
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Oudtech. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6" role="list">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-neutral-500 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
