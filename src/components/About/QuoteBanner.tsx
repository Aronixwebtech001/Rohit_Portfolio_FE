export default function QuoteBanner() {
  return (
    <section className="relative bg-navy-dark text-white overflow-hidden">
      {/* Subtle background texture overlay */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-content mx-auto px-6 md:px-10 py-20 text-center">
        <p className="font-serif text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto italic opacity-90">
          "I believe leadership means turning ideas into impact. Success is not just about
          building profitable businesses — it's about creating opportunities, empowering people,
          and leaving a lasting legacy."
        </p>
        <p className="text-white/50 text-sm mt-8 tracking-wider">— Rohit Jangir</p>
      </div>
    </section>
  );
}
