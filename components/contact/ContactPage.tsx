"use client";

import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import PageTransition from "@/components/PageTransition";
import { m } from "@/providers/MotionProvider";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formRef2, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formRef.current) {
      toast.error("Please fill out the form before submitting.");
      setIsSubmitting(false);
      return;
    }
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_emailJsServiceID || "",
        process.env.NEXT_PUBLIC_emailsTemplateID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_emailjsPublicKey || ""
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <PageTransition className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ContactHero />
        <ContactInfo />

        {mounted ? (
          <m.div
            ref={formRef2}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={formVariants}
            className="dev-card"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 gradient-text font-mono">
                $ node sendMessage.js
              </h2>
              <div className="code-block max-w-md mx-auto text-left">
                <pre className="text-sm">
                  <code>
                    <span className="syntax-comment">
                      // Initialize contact form
                    </span>
                    <br />
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-variable">message</span> ={" "}
                    <span className="syntax-keyword">new</span>{" "}
                    <span className="syntax-function">ContactForm</span>();
                    <br />
                    <span className="syntax-variable">message</span>.
                    <span className="syntax-function">send</span>();
                  </code>
                </pre>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 font-mono text-text-muted"
                  >
                    {"// Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-code-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors font-mono text-text"
                    placeholder="Enter your name..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 font-mono text-text-muted"
                  >
                    {"// Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-code-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors font-mono text-text"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 font-mono text-text-muted"
                >
                  {"// Message Body"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-code-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none font-mono text-text"
                  placeholder="Hello! I'd like to discuss..."
                />
              </div>
              <m.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-dev py-3 rounded-lg font-medium flex items-center justify-center space-x-2 glow-dev"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading" />
                    <span>$ executing...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>$ send --message</span>
                  </>
                )}
              </m.button>
            </form>
          </m.div>
        ) : (
          <div className="dev-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 gradient-text font-mono">
                $ node sendMessage.js
              </h2>
              <div className="code-block max-w-md mx-auto text-left">
                <pre className="text-sm">
                  <code>
                    <span className="syntax-comment">
                      // Initialize contact form
                    </span>
                    <br />
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-variable">message</span> ={" "}
                    <span className="syntax-keyword">new</span>{" "}
                    <span className="syntax-function">ContactForm</span>();
                    <br />
                    <span className="syntax-variable">message</span>.
                    <span className="syntax-function">send</span>();
                  </code>
                </pre>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 font-mono text-text-muted"
                  >
                    {"// Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-code-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors font-mono text-text"
                    placeholder="Enter your name..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 font-mono text-text-muted"
                  >
                    {"// Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-code-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors font-mono text-text"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 font-mono text-text-muted"
                >
                  {"// Message Body"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-code-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none font-mono text-text"
                  placeholder="Hello! I'd like to discuss..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-dev py-3 rounded-lg font-medium flex items-center justify-center space-x-2 glow-dev"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading" />
                    <span>$ executing...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>$ send --message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default ContactPage;
