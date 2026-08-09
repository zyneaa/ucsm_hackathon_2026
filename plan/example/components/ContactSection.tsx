import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="bg-[#0D0B1F] text-white py-16 px-6 md:px-16 min-h-screen flex flex-col justify-between border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Banner Image (1.jpg / halftone group) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto mb-16 overflow-hidden border border-white/10"
        >
          <img
            src="/1.jpg"
            alt="UCSM Organizing Committee"
            referrerPolicy="no-referrer"
            className="w-full h-44 sm:h-56 md:h-64 object-cover filter contrast-125 brightness-105"
          />
        </motion.div>

        {/* Section 1: CONTACT US */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-3"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-seasons uppercase tracking-wider text-white">
              CONTACT US
            </h2>
            <p className="font-mono-plex text-xs sm:text-sm text-white/70 lowercase">
              get in touch with the organizing committee
            </p>
          </motion.div>

          {/* Right Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 font-mono-plex text-xs sm:text-sm md:text-base text-white/80 space-y-2 lowercase"
          >
            <p className="hover:text-white transition-colors">
              <a href="mailto:info@ucsmsc.org" className="underline underline-offset-4">info@ucsmsc.org</a>
            </p>
            <p>+95 976 2016 492</p>
            <p>building a, ucsm main</p>
            <p>campus, mandalay</p>

            <button
              onClick={() => setShowInquiryModal(true)}
              className="mt-4 bg-white text-[#0D0B1F] font-mono-plex text-xs uppercase px-4 py-2 font-semibold hover:bg-[#0D0B1F]/10 transition-colors cursor-pointer"
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
          className="max-w-4xl mx-auto pt-12 border-t border-white/10 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-seasons uppercase tracking-wider text-white">
            PARTNER WITH US
          </h2>

          <div className="font-mono-plex text-xs sm:text-sm md:text-base text-white/80 space-y-2 lowercase">
            <p>interested in becoming a sponsor like our diamond partner?</p>
            <p className="pt-1">
              reach out to{' '}
              <a 
                href="mailto:sawmonmyatoo@gmail.com" 
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                sawmonmyatoo@gmail.com
              </a>
            </p>

            <div className="pt-4">
              <button
                onClick={() => setShowInquiryModal(true)}
                className="bg-[#0D0B1F] text-white border border-white/20 font-mono-plex text-xs uppercase px-5 py-2.5 hover:bg-white hover:text-[#0D0B1F] transition-colors cursor-pointer"
              >
                Become a Sponsor
              </button>
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
                className="absolute top-4 right-4 text-white/70 hover:text-white font-mono-plex text-xs cursor-pointer"
              >
                [ CLOSE X ]
              </button>

              <h3 className="text-2xl font-seasons uppercase text-white tracking-wider">
                Send Organizing Inquiry
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center font-mono-plex text-xs text-white space-y-2">
                  <p className="text-base font-semibold">Message Sent Successfully!</p>
                  <p className="text-white/80">The UCSM AI Hackathon committee will respond to {email}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono-plex text-xs">
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

      {/* Footer copyright */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center font-seasons text-xs sm:text-sm text-white/70 tracking-widest uppercase">
        2026 UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM). ALL RIGHTS RESERVED.
      </div>
    </section>
  );
};
