import Container from "./Container";
import { FaWhatsapp, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { siteData } from "../data/siteData";

export default function Contact() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-gradient-to-b from-pink-50 via-pink-50 to-pink-50"
    >
      <Container>
        <h2 className="text-3xl font-extrabold">Contact Us</h2>
        <p className="mt-2 text-gray-900">
          Order now — Free Delivery + Cash on Delivery available.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <FaPhoneAlt /> Call / WhatsApp
            </div>
            <p className="mt-3 text-gray-600">
              <span className="font-bold">{siteData.phone}</span>
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition"
            >
              <FaWhatsapp className="text-lg" /> Order on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <FaFacebook /> Facebook Page
            </div>
            <p className="mt-3 text-gray-900">
              Inbox us on Facebook for more photos and details.
            </p>

            <a
              href={siteData.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#FF4FA3] bg-pink-50 px-4 py-3 text-sm font-extrabold  text-[#FF4FA3] shadow-sm hover:bg-[#FF4FA3] hover:text-white transition"
            >
              <FaFacebook className="text-lg" /> Open Facebook Page
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
