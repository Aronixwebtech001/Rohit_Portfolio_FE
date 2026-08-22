// Partnership meeting placeholder — use Unsplash corporate meeting image
const meetingPhoto = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop";

export default function PartnershipsSection() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-14 shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-serif text-xl mb-3">Client Name</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Information or Summary of heading. Whether you're looking for investment,
                mentorship, or collaboration, let's explore how we can create something
                extraordinary together.
              </p>
              <p className="text-muted text-xs">
                <span className="text-navy font-medium">Founder (Designation)</span>, Client Name
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-sm">
              <img src={meetingPhoto} alt="Corporate partnership meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
