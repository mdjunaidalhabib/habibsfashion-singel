import { FaWhatsapp } from "react-icons/fa";
import { siteData } from "../data/siteData";

export default function FloatingWhatsApp() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-12 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
      Order
    </a>
  );
}
