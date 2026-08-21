export default function MentorshipHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
          Make Something
          <br />
          Different
        </h1>
        {/* Illustration placeholder */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/30 flex items-center justify-center">
          <div className="text-center text-navy/20">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto mb-3">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <p className="text-sm">Illustration Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
