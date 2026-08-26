import { Award, FileText, ExternalLink, BookOpen, Building2, Heart } from "lucide-react";

export default function MediaImpactSection() {
  const awards = [
    { title: "Entrepreneur of the Year 2024", org: "Business Today", year: "2024" },
    { title: "Innovator in Mobility", org: "AutoTech Awards", year: "2023" },
    { title: "Real Estate Visionary", org: "Property Times", year: "2023" },
    { title: "Social Impact Leader", org: "CSR Times", year: "2022" },
    { title: "Young Achiever Award", org: "Economic Times", year: "2024" },
    { title: "Excellence in Digital Solutions", org: "Tech Innovators", year: "2022" },
  ];

  const press = [
    { title: "How Rohit Jangir built a ₹100 Crore Portfolio by Age 30", source: "Business Standard" },
    { title: "The Rise of Multi-Subsidiary Entrepreneurs in India", source: "Fortune India" },
    { title: "Aaru Mobility: Revolutionizes Urban Transport", source: "StartCrunch" },
    { title: "Mentorship as a Revenue: The New Startup Trend", source: "YourStory" },
  ];

  const impacts = [
    { icon: <BookOpen size={28} className="text-navy" />, stat: "500+", label: "Students Educated" },
    { icon: <Building2 size={28} className="text-navy" />, stat: "100+", label: "Free Medical Camps" },
    { icon: <Heart size={28} className="text-navy" />, stat: "₹2Cr+", label: "Social Investment" },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy text-white text-center py-20 px-6">
        <div className="max-w-content mx-auto">
          <h1 className="font-serif uppercase text-4xl md:text-5xl mb-4">MEDIA & IMPACT</h1>
          <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
            Recognition, press coverage, and the impact we're making through our ventures and social initiatives.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-content mx-auto space-y-28">
          
          {/* Awards */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Awards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, i) => (
                <div key={i} className="bg-[#F7F9F9] border border-black/5 rounded-2xl p-8 text-center flex flex-col items-center">
                  <div className="text-[#C5A866] mb-5">
                    <Award size={32} />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2 leading-snug">{award.title}</h3>
                  <p className="text-gray-500 text-[13px]">{award.org}</p>
                  <p className="text-gray-500 text-[13px]">{award.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Press */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Press & Media Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {press.map((item, i) => (
                <a key={i} href="#" className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-gray-400 hover:shadow-sm transition-all group">
                  <div className="text-gray-400 shrink-0 mt-0.5">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-medium text-navy leading-snug mb-2 group-hover:text-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-[12px]">{item.source}</p>
                  </div>
                  <div className="text-gray-300 shrink-0 group-hover:text-teal transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Foundation Impact */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Aaru Care Foundation Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {impacts.map((impact, i) => (
                <div key={i} className="bg-[#F7F9F9] border border-black/5 rounded-2xl p-8 text-center flex flex-col items-center">
                  <div className="mb-4">
                    {impact.icon}
                  </div>
                  <h3 className="font-serif text-3xl text-navy mb-2">{impact.stat}</h3>
                  <p className="text-gray-600 text-sm font-medium">{impact.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
