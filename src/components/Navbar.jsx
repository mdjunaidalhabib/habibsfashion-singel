import { useEffect, useState } from "react";
import Container from "./Container";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { siteData } from "../data/siteData";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  // Scroll Spy active section
  const sections = ["home", "products", "delivery", "contact"];
  const activeId = useActiveSection(sections);

  // Mobile menu state
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = (id) =>
    `w-full rounded-xl px-3 py-2 text-sm font-extrabold transition ${
      activeId === id
        ? "bg-pink-500 text-white"
        : "text-slate-700 hover:bg-[#FF4FA3]"
    }`;

  const desktopLinkClass = (id) =>
    `rounded-xl px-3 py-2 text-sm font-extrabold transition ${
      activeId === id
        ? "bg-[#FF4FA3] text-slate-800"
        : "text-slate-900 hover:bg-[#FF4FA3]"
    }`;

  const handleNavClick = () => {
    setOpen(false); // mobile menu auto close
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-pink-300 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-3 gap-4">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={handleNavClick}
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-slate-900 text-white font-black shadow">
              HF
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-slate-900">
                {siteData.brand}
              </div>
              <div className="text-xs text-slate-900">
                Female Bags • Free Delivery
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <a className={desktopLinkClass("home")} href="#home">
              Home
            </a>
            <a className={desktopLinkClass("products")} href="#products">
              Products
            </a>
            <a className={desktopLinkClass("delivery")} href="#delivery">
              Delivery
            </a>
            <a className={desktopLinkClass("contact")} href="#contact">
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-2">
              {/* WhatsApp Button */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>

              {/* Inbox Button */}
              <a
                href={siteData.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#FF4FA3] bg-pink-50 px-3 py-2 text-sm font-semibold text-[#FF4FA3] shadow-sm hover:bg-[#FF4FA3] hover:text-white transition"
              >
                <FaFacebookMessenger className="text-lg" />
                Inbox
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF4FA3]  bg-pink-200 text-slate-900 hover:bg-pink-200"
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-slate-200 bg-pink-50 p-3 shadow-sm">
              <div className="grid gap-2">
                <a
                  className={linkClass("home")}
                  href="#home"
                  onClick={handleNavClick}
                >
                  Home
                </a>
                <a
                  className={linkClass("products")}
                  href="#products"
                  onClick={handleNavClick}
                >
                  Products
                </a>
                <a
                  className={linkClass("delivery")}
                  href="#delivery"
                  onClick={handleNavClick}
                >
                  Delivery
                </a>
                <a
                  className={linkClass("contact")}
                  href="#contact"
                  onClick={handleNavClick}
                >
                  Contact
                </a>

                {/* Mobile Buttons */}
                <div className="mt-2 grid gap-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition"
                    onClick={handleNavClick}
                  >
                    <FaWhatsapp className="text-lg" />
                    Order on WhatsApp
                  </a>

                  <a
                    href={siteData.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#FF4FA3] bg-pink-50 px-3 py-2 text-sm font-semibold text-[#FF4FA3] shadow-sm hover:bg-[#FF4FA3] hover:text-white transition"
                    onClick={handleNavClick}
                  >
                    <FaFacebookMessenger className="text-lg" />
                    Inbox on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
