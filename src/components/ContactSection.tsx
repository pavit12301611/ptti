import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Phone, Copy, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ContactButton from './ContactButton';

// 👇 EDIT THESE WITH YOUR REAL DETAILS
const CONTACT_INFO = {
  email: 'your-email@example.com',
  instagramHandle: '@your_handle',
  instagramUrl: 'https://instagram.com/your_handle',
  whatsappDisplay: '+91 XXXXX XXXXX',
  whatsappNumber: '91XXXXXXXXXX', // No +, no spaces, country code first
};

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const channels = [
    {
      key: 'email',
      label: 'Email',
      value: CONTACT_INFO.email,
      icon: <Mail className="w-5 h-5" />,
      color: '#00d4ff',
      borderClass: 'neon-border',
      bgClass: 'bg-[#00d4ff]/10 group-hover:bg-[#00d4ff]/20',
      shadow: '0 0 25px rgba(0,212,255,0.1)',
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      key: 'instagram',
      label: 'Instagram',
      value: CONTACT_INFO.instagramHandle,
      icon: <Instagram className="w-5 h-5" />,
      color: '#ff006e',
      borderClass: 'neon-border-pink',
      bgClass: 'bg-[#ff006e]/10 group-hover:bg-[#ff006e]/20',
      shadow: '0 0 25px rgba(255,0,110,0.1)',
      href: CONTACT_INFO.instagramUrl,
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      value: CONTACT_INFO.whatsappDisplay,
      icon: <Phone className="w-5 h-5" />,
      color: '#00ff87',
      borderClass: 'neon-border-green',
      bgClass: 'bg-[#00ff87]/10 group-hover:bg-[#00ff87]/20',
      shadow: '0 0 25px rgba(0,255,135,0.1)',
      href: `https://wa.me/${CONTACT_INFO.whatsappNumber}`,
    },
  ];

  return (
    <section id="contact" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative z-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-5 blur-[150px]" style={{ background: 'radial-gradient(ellipse,#7b2ff7,#00d4ff,transparent)' }} />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal direction="left" offset={60}>
          <span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest block mb-4">{'<'} Let&apos;s Build Together {'/>'}</span>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem,10vw,120px)' }}>Connect</h2>
        </ScrollReveal>

        <ScrollReveal direction="left" offset={40}>
          <p className="text-[#D7E2EA]/35 font-light text-base sm:text-xl max-w-xl mb-10 leading-relaxed text-left">
            Got a cool project idea? Want to collaborate on something epic? Or just want to nerd out about code?
            I&apos;m always down for a conversation! Reach out through any of these channels. 🚀
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" offset={30}>
          <div className="flex flex-col gap-4 max-w-md mb-12">
            {channels.map((c) => (
              <motion.div
                key={c.key}
                className={`flex items-center gap-4 p-4 rounded-2xl glass ${c.borderClass} group relative`}
                whileHover={{ x: 8, boxShadow: c.shadow }}
              >
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 flex-1 cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl ${c.bgClass} flex items-center justify-center transition-colors`}>
                    <span style={{ color: c.color }}>{c.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[#D7E2EA]/30 text-xs font-mono uppercase tracking-wider block">{c.label}</span>
                    <span className="text-[#D7E2EA] font-medium text-sm sm:text-base block truncate">{c.value}</span>
                  </div>
                </a>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); copy(c.value, c.key); }}
                  className="p-2 rounded-lg hover:bg-white/5 cursor-pointer flex-shrink-0"
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Copy ${c.label}`}
                >
                  <AnimatePresence mode="wait">
                    {copied === c.key ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check className="w-4 h-4" style={{ color: c.color }} />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy className="w-4 h-4 text-white/30" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" offset={20}>
          <a href={`mailto:${CONTACT_INFO.email}`} className="inline-block">
            <ContactButton label="Send Email" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
