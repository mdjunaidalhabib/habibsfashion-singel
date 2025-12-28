import Container from "./Container";
import { FaStar, FaTags, FaHandsHelping, FaShippingFast } from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    { icon: <FaStar />, title: "Premium Quality", desc: "Quality guaranteed bags." },
    { icon: <FaTags />, title: "Affordable Price", desc: "Best price with stylish design." },
    { icon: <FaShippingFast />, title: "Free Delivery", desc: "Delivery all over Bangladesh." },
    { icon: <FaHandsHelping />, title: "Customer Support", desc: "Fast response on WhatsApp & Inbox." },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <Container>
        <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Us?</h2>
        <p className="mt-2 text-slate-600">Habib’s Fashion — trusted for quality & style.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((x, i) => (
            <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-900 text-xl">
                {x.icon}
              </div>
              <div className="mt-4 text-lg font-extrabold text-slate-900">{x.title}</div>
              <div className="mt-1 text-slate-600">{x.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
