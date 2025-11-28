import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo.png";

const aboutLinks = [
  { href: "/careers", label: "Career" },
  { href: "/angel-investor", label: "Angel Investor" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/legal", label: "Legal Information" },
  { href: "/credits", label: "Credits" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div
              className="w-40 h-20 mb-6 flex items-center justify-center bg-white"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
              }}
            >
              <Image
                src={logo}
                alt="Flame of Hope"
                width={88}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Flame of Hope empowers communities through healthcare, education,
              and economic support for those who need it most.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/80 hover:text-brand-main transition-fx"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-brand-main font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {aboutLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-fx">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-main font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-fx">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-main font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-brand-main" />
                <span>
                  No. 1A Tafawa Balewa Street (near Township Primary School),
                  Jos – Plateau State.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-main" />
                <Link
                  href="mailto:flameofhopenigeria@yahoo.com"
                  className="hover:text-white transition-fx"
                >
                  flameofhopenigeria@yahoo.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-main" />
                <Link
                  href="tel:07062822822"
                  className="hover:text-white transition-fx"
                >
                  07062822822, 08034044418
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Flame Of Hope</span>. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};
