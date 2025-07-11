"use client";

import { m } from "@/providers/MotionProvider";
import { useEffect, useState } from "react";
import { FaCode, FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "home", href: "/", icon: FaHome, command: "cd ~/" },
    { name: "about", href: "/about", icon: FaUser, command: "cat about.md" },
    {
      name: "projects",
      href: "/projects",
      icon: FaCode,
      command: "ls ./projects/",
    },
    {
      name: "contact",
      href: "/contact",
      icon: FaEnvelope,
      command: "mail -s 'Hello'",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <m.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-sm  shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <m.div variants={itemVariants} className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold gradient-text font-mono"
            >
              {"<RZ />"}
            </Link>
          </m.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <m.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-mono ${
                        isActive
                          ? "text-accent bg-accent/10"
                          : "text-text-secondary hover:text-accent hover:bg-accent/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <m.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-accent hover:bg-accent/5 transition-colors duration-200 font-mono"
            >
              {isOpen ? (
                <span className="text-sm">✕</span>
              ) : (
                <span className="text-sm">☰</span>
              )}
            </m.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <m.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden terminal border-t border-border overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="terminal-header">navigation@menu:~$</div>
        <div className="space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <m.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 text-sm"
              >
                <span className="text-terminal-green">$</span>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-2 py-1 rounded font-mono transition-colors duration-200 ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.command}</span>
                </Link>
              </m.div>
            );
          })}
        </div>
      </m.div>
    </m.nav>
  );
};

export default Navbar;
