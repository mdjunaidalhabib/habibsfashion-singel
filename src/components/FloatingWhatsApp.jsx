import { FaWhatsapp } from "react-icons/fa";
import { siteData } from "../data/siteData";

export default function FloatingWhatsApp() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-extrabold text-slate-900 shadow-lg hover:bg-green-400"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
      Order
    </a>
  );
}
