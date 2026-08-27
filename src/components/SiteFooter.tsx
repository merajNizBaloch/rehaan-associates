export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07111F] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[10px] uppercase tracking-[0.18em] text-[#9BA7B4] sm:flex-row sm:items-center sm:justify-between">

        <span>
          © {new Date().getFullYear()} Rehan Consultants
        </span>

        <span className="text-center normal-case tracking-normal sm:text-right">
          Designed and Developed by{" "}
          <a
            href="https://wa.me/923336077281"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70"
          >
            Tech Craft
          </a>
        </span>

      </div>
    </footer>
  );
}
