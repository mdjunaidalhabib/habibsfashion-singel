import { useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaLink,
  FaCheck,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa";
import { siteData } from "../data/siteData";
import { getProductShareLink } from "../utils/productUtils";

export default function Products() {
  const [copiedSlug, setCopiedSlug] = useState(null);
  const [activeSlug, setActiveSlug] = useState(null);

  const cardRefs = useRef({});

  const makeWaLink = (productName, price) => {
    const msg = `Assalamu Alaikum. Ami Habib’s Fashion er "${productName}" (Price: ৳${price}) order korte chai. Delivery FREE & Cash on Delivery available?`;
    return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const copyToClipboard = async (slug, link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch (e) {
      const textarea = document.createElement("textarea");
      textarea.value = link;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    }
  };

  useEffect(() => {
    const readHashProduct = () => {
      const hash = window.location.hash || "";
      if (!hash.startsWith("#products")) return;

      const qIndex = hash.indexOf("?");
      if (qIndex === -1) return;

      const query = hash.slice(qIndex + 1);
      const params = new URLSearchParams(query);
      const slug = params.get("product");

      if (slug) {
        setActiveSlug(slug);
        setTimeout(() => {
          const el = cardRefs.current[slug];
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }
    };

    readHashProduct();
    window.addEventListener("hashchange", readHashProduct);
    return () => window.removeEventListener("hashchange", readHashProduct);
  }, []);

  const products = useMemo(() => siteData.products, []);

  return (
    <section id="products" className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Bags</h2>
            <p className="mt-2 text-slate-600">
              ✅ Free Delivery • ✅ Cash on Delivery • ✅ Premium Quality
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {products.map((p) => {
            const waLink = makeWaLink(p.name, p.price);
            const shareLink = getProductShareLink(p.slug);

            const isHighlighted = activeSlug && activeSlug === p.slug;

            const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareLink
            )}`;

            return (
              <div
                key={p.id}
                ref={(node) => {
                  if (node) cardRefs.current[p.slug] = node;
                }}
                className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md
                  ${isHighlighted ? "border-amber-400 ring-4 ring-amber-200" : "border-slate-200"}
                `}
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold text-slate-900">
                    {p.badge}
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-extrabold text-white">
                    FREE DELIVERY
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 backdrop-blur">
                    <div className="text-xs font-bold text-slate-500">Price</div>
                    <div className="text-2xl font-extrabold text-slate-900">৳ {p.price}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{p.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        ✅ Cash on Delivery Available
                      </p>
                    </div>

                    <button
                      onClick={() => copyToClipboard(p.slug, shareLink)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                      type="button"
                      aria-label="Copy product link"
                      title="Copy product link"
                    >
                      {copiedSlug === p.slug ? (
                        <>
                          <FaCheck className="text-green-600" /> Copied
                        </>
                      ) : (
                        <>
                          <FaLink /> Copy Link
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <FaCheckCircle className="mt-1 text-green-600" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-4 py-3 font-extrabold text-slate-900 hover:bg-amber-400"
                    >
                      <FaWhatsapp className="text-lg" />
                      Buy Now on WhatsApp
                    </a>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href={fbShareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        <FaFacebook className="text-lg" />
                        Share on Facebook
                      </a>

                      <a
                        href={siteData.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold text-slate-900 hover:bg-slate-50"
                      >
                        <FaFacebookMessenger className="text-lg" />
                        Share / Inbox
                      </a>
                    </div>

                    <div className="text-center text-xs text-slate-500">
                      Share link:{" "}
                      <span className="font-semibold break-all">{shareLink}</span>
                    </div>
                  </div>

                  {isHighlighted && (
                    <div className="mt-4 rounded-2xl bg-amber-50 p-3 text-sm font-bold text-amber-900">
                      ✅ You opened this product link
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
