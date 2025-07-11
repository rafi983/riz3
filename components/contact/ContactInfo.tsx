"use client";

import { m } from "@/providers/MotionProvider";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "email",
    value: "hi@ahammadabdullah.dev",
    href: "mailto:hi@ahammadabdullah.dev",
    command: "mail -s 'Hello' hi@ahammadabdullah.dev",
    status: "online",
  },
  {
    icon: FaMapMarkerAlt,
    title: "location",
    value: "Dhaka, Bangladesh",
    href: "#",
    command: "curl -s ipinfo.io/city",
    status: "available",
  },
  {
    icon: FaGithub,
    title: "github",
    value: "@ahammadabdullah",
    href: "https://github.com/ahammadabdullah",
    command: "git clone https://github.com/ahammadabdullah",
    status: "active",
  },
  {
    icon: FaLinkedin,
    title: "linkedin",
    value: "@ahammad-abdullah",
    href: "https://www.linkedin.com/in/ahammad-abdullah/",
    command: "curl -L linkedin.com/in/ahammad-abdullah",
    status: "professional",
  },
];

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold gradient-text font-mono mb-4">
          $ cat contact.json
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <m.a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : "_self"}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : ""}
              variants={itemVariants}
              className="dev-card group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text font-mono">
                      {contact.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {contact.value}
                    </p>
                  </div>
                </div>
                <div className="status-online text-xs">{contact.status}</div>
              </div>

              <div className="code-block">
                <pre className="text-xs">
                  <code className="text-text-secondary">
                    $ {contact.command}
                  </code>
                </pre>
              </div>
            </m.a>
          );
        })}
      </div>
    </m.div>
  );
};

export default ContactInfo;
