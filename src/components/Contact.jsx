import Container from "./Container";
import { FaWhatsapp, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { siteData } from "../data/siteData";

export default function Contact() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-900 text-white">
      <Container>
        <h2 className="text-3xl font-extrabold">Contact Us</h2>
        <p className="mt-2 text-white/80">
          Order now — Free Delivery + Cash on Delivery available.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <FaPhoneAlt /> Call / WhatsApp
            </div>
            <p className="mt-3 text-white/80">
              <span className="font-bold">{siteData.phone}</span>
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 font-extrabold text-slate-900 hover:bg-green-400"
            >
              <FaWhatsapp className="text-lg" /> Order on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <FaFacebook /> Facebook Page
            </div>
            <p className="mt-3 text-white/80">
              Inbox us on Facebook for more photos and details.
            </p>

            <a
              href={siteData.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 font-extrabold text-slate-900 hover:bg-amber-300"
            >
              <FaFacebook className="text-lg" /> Open Facebook Page
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
