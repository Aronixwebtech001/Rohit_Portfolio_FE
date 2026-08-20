export default function Footer() {
  return (
    <footer className="bg-[#102a33] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/5 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1050px] justify-center">
          <form className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="h-[44px] flex-1 rounded-full border border-transparent bg-[#f1f4f5] px-5 text-[12px] text-[#20262b] outline-none placeholder:text-[#4e575d] focus:border-[#56a8af]"
            />

            <button
              type="submit"
              className="h-[44px] rounded-full bg-white px-6 text-[12px] font-medium text-[#17272e] transition hover:bg-slate-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-16">
        {/* Brand */}
        <div>
          <a href="/" className="inline-flex items-center gap-2">
            <div className="h-7 w-7">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M5 7.5L27 7.5L17.8 12.4L27 17.2L17.8 22.1L27 26.8"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12.3L17.8 12.3"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="text-[15px] font-semibold tracking-[-0.03em]">
              ROHIT JANGIR
            </span>
          </a>

          <p className="mt-5 max-w-[180px] text-[13px] leading-6 text-white/80">
            Building Businesses,
            <br />
            Empowering Entrepreneurs.
          </p>

          <a
            href="mailto:connect@rohitjangir.com"
            className="mt-6 inline-flex rounded-md border border-white/60 px-5 py-2.5 text-[12px] transition hover:bg-white hover:text-[#102a33]"
          >
            Contact US
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[13px] font-medium">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/about"
              className="text-[12px] text-white/80 hover:text-white"
            >
              About
            </a>

            <a
              href="/ventures"
              className="text-[12px] text-white/80 hover:text-white"
            >
              Ventures
            </a>

            <a
              href="/pitch"
              className="text-[12px] text-white/80 hover:text-white"
            >
              Pitch
            </a>
          </div>
        </div>

        {/* Opportunities */}
        <div>
          <h3 className="text-[13px] font-medium">Opportunities</h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/pitch"
              className="text-[12px] text-white/80 hover:text-white"
            >
              Pitch Your Ideas
            </a>

            <a
              href="/mentorship"
              className="text-[12px] text-white/80 hover:text-white"
            >
              Book Consultation
            </a>

            <a
              href="/case-studies"
              className="text-[12px] text-white/80 hover:text-white"
            >
              Case Study
            </a>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-[13px] font-medium">Connect</h3>

          <a
            href="mailto:connect@rohitjangir.com"
            className="mt-5 block text-[12px] text-white/80 hover:text-white"
          >
            connect@rohitjangir.com
          </a>

          <div className="mt-5 flex items-center gap-3">
            {["in", "𝕏", "◎", "f"].map((social) => (
              <a
                key={social}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] text-white transition hover:bg-white/20"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}