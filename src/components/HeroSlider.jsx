import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";
import { siteData } from "../data/siteData";

export default function HeroSlider() {
  const slides = useMemo(() => siteData.products, []);
  const [index, setIndex] = useState(0);

  const active = slides[index];
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-white" />
      <Container>
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
              <FaShippingFast /> {siteData.offer}
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {siteData.tagline}
            </h1>

            <p className="mt-4 text-lg text-slate-600">{siteData.subtitle}</p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 font-semibold text-green-700">
              <FaMoneyBillWave /> {siteData.cod}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-slate-800"
              >
                <FaWhatsapp className="text-lg" /> Order on WhatsApp
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-900 hover:bg-slate-50"
              >
                View Products
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              📞 Call/WhatsApp: <span className="font-semibold">{siteData.phone}</span>
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-80 w-full bg-slate-100">
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold text-slate-900">
                  {active.badge}
                </div>

                <div className="absolute right-4 top-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-extrabold text-white">
                  FREE DELIVERY
                </div>

                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900 shadow hover:bg-white"
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-900 shadow hover:bg-white"
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-slate-500">Featured Product</div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">{active.name}</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-600">✅ COD Available</div>
                  <div className="text-2xl font-extrabold text-slate-900">৳ {active.price}</div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2.5 w-2.5 rounded-full ${
                        i === index ? "bg-slate-900" : "bg-slate-300"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-200/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-slate-200/60 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
