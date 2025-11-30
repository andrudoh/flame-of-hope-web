import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [logoError, setLogoError] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { pathname } = useRouter();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/sponsor", label: "Sponsor" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-brand-secondary flex items-center justify-between min-h-[72.75px] md:h-[72.75px] z-50">
        {/* logo part */}
        <div
          className="flex items-center justify-center h-[72.75px] md:h-[90px] w-full md:w-[297px] bg-white px-4 md:px-20 z-10"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-brand-white"
          >
            <div className="flex items-center">
              {/* Logo Image - Falls back to SVG if image not found */}
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 flex items-center justify-center relative">
                {!logoError ? (
                  <Image
                    src={logo}
                    alt="Flame of Hope Logo"
                    width={120}
                    height={120}
                    className="object-cover"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-brand-main font-semibold text-base md:text-lg lg:text-xl leading-tight">
                    FOH
                  </span>
                )}
              </div>
              {/* <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center relative">
                {!logoError ? (
                  <Image
                    src={logo}
                    alt="Flame of Hope Logo"
                    width={57}
                    height={57}
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-brand-main font-semibold text-base md:text-lg lg:text-xl leading-tight">
                    FOH
                  </span>
                )}
              </div> */}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center space-x-4 md:flex lg:space-x-6 xl:space-x-8 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-border text-white transition-fx text-sm font-medium lg:text-base hover:text-brand-main ${
                  isActive ? "text-brand-main nav-link-border-active" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Us Button */}
        <div className="hidden md:flex items-center mr-4 lg:mr-12">
          <Link
            href="/contact"
            className="bg-brand-red text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-md transition-fx text-sm lg:text-base font-medium whitespace-nowrap hover:bg-brand-white hover:text-brand-red"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden mr-4 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                key="overlay"
                className="fixed inset-0 bg-black/40 md:hidden z-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                key="menu"
                className="absolute top-full left-0 w-full bg-brand-secondary md:hidden z-40 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="flex flex-col p-4 space-y-3">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-white transition-fx text-base py-2 px-4 ${
                          isActive ? "text-brand-main" : "hover:text-brand-main"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
                    className="bg-brand-red text-white px-4 py-2 rounded-md hover:opacity-75 transition-fx text-base font-medium text-center mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
