import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { siteData } from "../data/siteData";
import useActiveSection from "../hooks/useActiveSection";

// ✅ Logo import
import logo from "../assets/logo-512.png";

export default function Navbar() {
  const waLink = `https://wa.me/${siteData.whatsappNumber}`;

  // Scroll Spy active section
  const sections = ["home", "products", "delivery", "contact"];
  const activeId = useActiveSection(sections);

  // Mobile menu state
  const [open, setOpen] = useState(false);

  // Mobile menu wrapper ref (outside click close)
  const mobileMenuRef = useRef(null);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!open) return;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Smooth scroll helper
  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const linkClass = (id) =>
    `w-full rounded-xl px-3 py-2 text-sm font-extrabold transition ${
      activeId === id
        ? "bg-[#FF4FA3] text-white"
        : "text-slate-800 hover:bg-[#FF4FA3] hover:text-white"
    }`;

  const desktopLinkClass = (id) =>
    `rounded-xl px-3 py-2 text-sm font-extrabold transition ${
      activeId === id
        ? "bg-[#FF4FA3] text-white shadow-sm"
        : "text-slate-900 hover:bg-[#FF4FA3] hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FF4FA3] backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-3 gap-4">
          {/* ✅ Brand with Logo */}
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-3 text-left"
            type="button"
          >
            <div className="h-11 w-11 overflow-hidden rounded-xl border border-white/30 bg-[#FF4FA3] shadow-sm">
              <img
                src={logo}
                alt="Habib’s Fashion Logo"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="leading-tight">
              <div className="font-extrabold text-slate-900">
                {siteData.brand}
              </div>
              <div className="text-xs text-slate-900">
                Female Bags • Free Delivery
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              className={desktopLinkClass("home")}
              onClick={() => goTo("home")}
              type="button"
            >
              Home
            </button>
            <button
              className={desktopLinkClass("products")}
              onClick={() => goTo("products")}
              type="button"
            >
              Products
            </button>
            <button
              className={desktopLinkClass("delivery")}
              onClick={() => goTo("delivery")}
              type="button"
            >
              Delivery
            </button>
            <button
              className={desktopLinkClass("contact")}
              onClick={() => goTo("contact")}
              type="button"
            >
              Contact
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>

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
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF4FA3] bg-pink-200 text-slate-900 hover:bg-pink-100 transition"
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* ✅ Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div
              ref={mobileMenuRef}
              className="rounded-2xl border border-slate-200 bg-pink-50 p-3 shadow-sm"
            >
              <div className="grid gap-2">
                <button
                  className={linkClass("home")}
                  onClick={() => goTo("home")}
                  type="button"
                >
                  Home
                </button>
                <button
                  className={linkClass("products")}
                  onClick={() => goTo("products")}
                  type="button"
                >
                  Products
                </button>
                <button
                  className={linkClass("delivery")}
                  onClick={() => goTo("delivery")}
                  type="button"
                >
                  Delivery
                </button>
                <button
                  className={linkClass("contact")}
                  onClick={() => goTo("contact")}
                  type="button"
                >
                  Contact
                </button>

                {/* Mobile Buttons */}
                <div className="mt-2 grid gap-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1EBE5D] transition"
                    onClick={() => setOpen(false)}
                  >
                    <FaWhatsapp className="text-lg" />
                    Order on WhatsApp
                  </a>

                  <a
                    href={siteData.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#FF4FA3] bg-pink-50 px-3 py-2 text-sm font-semibold text-[#FF4FA3] shadow-sm hover:bg-[#FF4FA3] hover:text-white transition"
                    onClick={() => setOpen(false)}
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
