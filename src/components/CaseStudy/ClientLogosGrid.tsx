import img1 from "../../assets/images/case-study/image2.jpg";
import img2 from "../../assets/images/case-study/image3.jpg";
import img3 from "../../assets/images/case-study/image4.jpg";
import img4 from "../../assets/images/case-study/image5.jpg";
import img5 from "../../assets/images/case-study/image6.jpg";
import img6 from "../../assets/images/case-study/image7.jpg";

export default function ClientLogosGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 pb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14 leading-snug">
          Relied upon by a Fresh
          <br className="hidden md:block" />
          {" "}Generation of Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[img1, img2, img3, img4, img5, img6].map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl overflow-hidden hover:shadow-md transition-shadow relative"
            >
              <img src={src} alt="Case Study" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#432371]/80 to-transparent pointer-events-none opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
