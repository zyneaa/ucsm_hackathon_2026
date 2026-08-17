import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, X } from 'lucide-react';
import ContactBannerImg from '../assets/ContactUs.png';

export const Contacts: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const isMobile = () =>
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.matchMedia('(pointer: coarse)').matches;

  const handlePhoneClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile()) {
      return;
    }
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('+95 976 2016 492');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:info@ucsmsc.org?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowInquiryModal(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 sm:px-10 lg:px-16 pt-0 sm:pt-8 pb-8 md:py-16 flex flex-col justify-start sm:justify-center text-[#ffffff]"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8 sm:space-y-12">
        {/* Top Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden border border-white/10"
        >
          <img
            src={ContactBannerImg}
            alt="UCSM Organizing Committee"
            className="w-full h-44 sm:h-56 md:h-64 object-cover filter contrast-125 brightness-105"
          />
        </motion.div>

        {/* Section 1: CONTACT US */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-6 sm:mb-10">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-3"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-white">
              CONTACT US
            </h1>
            <p className="font-mono text-xs sm:text-sm text-white/70 lowercase">
              get in touch with the organizing committee
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.tiktok.com/@ucsm_mm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UCSM TikTok"
                title="UCSM TikTok"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/school/ucsm-mmr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UCSM LinkedIn"
                title="UCSM LinkedIn"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@ucsm_mm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UCSM YouTube"
                title="UCSM YouTube"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/ucsm.mm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UCSM Facebook"
                title="UCSM Facebook"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ucsm_mm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UCSM Instagram"
                title="UCSM Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://x.com/ucsm_mm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UCSM X"
                title="UCSM X"
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 font-mono text-xs sm:text-sm md:text-base text-white/80 space-y-2 lowercase"
          >
            <p className="hover:text-white transition-colors">
              <a href="mailto:info@ucsmsc.org" className="inline-flex items-center gap-1.5 underline underline-offset-4">
                <Mail size={16} aria-hidden="true" className="shrink-0" />
                info@ucsmsc.org
              </a>
            </p>
            <p className="hover:text-white transition-colors">
              <a
                href="tel:+959762016492"
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-1.5"
              >
                <Phone size={16} aria-hidden="true" className="shrink-0" />
                {copied ? 'copied to clipboard!' : '+95 976 2016 492'}
              </a>
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/g3SXHxXg4sWdWA4Z9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MapPin size={16} aria-hidden="true" className="shrink-0" />
                <span>ucsm hackathon venue</span>
              </a>
            </p>

            <button
              onClick={() => setShowInquiryModal(true)}
              className="mt-4 bg-white text-[#0D0B1F] font-mono text-xs uppercase px-4 py-2 font-semibold border border-white hover:bg-[#0D0B1F] hover:text-white transition-colors cursor-pointer"
            >
              Send Direct Message &rarr;
            </button>
          </motion.div>
        </div>

        {/* Section 2: PARTNER WITH US */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 sm:pt-12 border-t border-white/10 space-y-4"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-white">
            PARTNER WITH US
          </h2>

          <div className="font-mono text-xs sm:text-sm md:text-base text-white/80 space-y-2 lowercase">
            <p>interested in becoming our sponsor?</p>
            <p className="pt-1">
              reach out to{' '}
              <a
                href="mailto:sawmonmyatoo@gmail.com"
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                sawmonmyatoo@gmail.com
              </a>
            </p>

            {/* SPONSORSHIP PDF BUTTON */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="src/assets/sponsorship.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0D0B1F] text-white border border-white/20 font-mono text-xs uppercase px-5 py-2.5 hover:bg-white hover:text-[#0D0B1F] transition-colors cursor-pointer"
              >
                Become a Sponsor (PDF) &darr;
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Inquiry Form Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B1F]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D0B1F] text-white border border-white/20 max-w-md w-full p-6 md:p-8 space-y-6 relative shadow-2xl"
            >
              <button
                onClick={() => setShowInquiryModal(false)}
                aria-label="Close"
                className="absolute top-3 right-3 md:top-4 md:right-4 p-2.5 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} aria-hidden="true" />
              </button>

              <h3 className="text-2xl font-serif uppercase text-white tracking-wider">
                Send Organizing Inquiry
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center font-mono text-xs text-white space-y-2">
                  <p className="text-base font-semibold">Message Sent Successfully!</p>
                  <p className="text-white/80">The UCSM AI Hackathon committee will respond to {email}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-white/70 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Saw Mon Myat Oo"
                      className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sawmonmyatoo@gmail.com"
                      className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-1">Message / Sponsorship Interest *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we partner or assist you?"
                      className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-[#0D0B1F] py-3 font-semibold uppercase tracking-wider hover:bg-[#0D0B1F]/10 transition-colors cursor-pointer mt-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};