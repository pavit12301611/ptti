import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Heart, Zap, Coffee, Bug, Gamepad2, Brain, Quote, Monitor } from 'lucide-react';
import FadeIn from './FadeIn';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const AboutSection: React.FC = () => {
  const [activeTL, setActiveTL] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timeline = [
    { age: 10, year: 2020, title: 'First "Hello World"', icon: '🌱', desc: 'Wrote my very first HTML page. The moment that screen showed "Hello World", I knew this was my calling. What started as curiosity became an obsession that would define my entire life path. I spent hours just changing colors and text, mesmerized by the power of creation.', color: '#00ff87' },
    { age: 11, year: 2021, title: 'Python Discovery', icon: '🐍', desc: 'Discovered Python and it felt like finding a superpower. I automated everything — from homework reminders to simple games. Built my first web scraper, created chatbots, and fell deeply in love with the elegance of Python\'s syntax. Every day brought a new project.', color: '#3776AB' },
    { age: 12, year: 2022, title: 'Full-Stack Journey', icon: '🚀', desc: 'Dove headfirst into JavaScript, learned React, explored Node.js, and built my first full-stack applications. Every bug was a lesson, every deployment a victory. Started understanding databases, APIs, and how the entire web ecosystem connects together.', color: '#ff6b35' },
    { age: 14, year: 2024, title: 'Digital Architect', icon: '🏛️', desc: 'Now pushing every boundary I can find. Three.js for 3D worlds, GSAP for buttery animations, WebGL for raw GPU power, diving into AI/ML, and mastering Java. Age 14, but my code doesn\'t know that. Building the future, one commit at a time.', color: '#00d4ff' },
  ];

  const diags = [
    { label: 'Coding Addiction', value: 99, icon: <Zap className="w-4 h-4" />, color: '#00d4ff' },
    { label: 'Coffee Dependency', value: 87, icon: <Coffee className="w-4 h-4" />, color: '#ff6b35' },
    { label: 'Bug Tolerance', value: 65, icon: <Bug className="w-4 h-4" />, color: '#00ff87' },
    { label: 'Sleep Schedule', value: 12, icon: <Monitor className="w-4 h-4" />, color: '#ff006e' },
    { label: 'Gaming Skills', value: 76, icon: <Gamepad2 className="w-4 h-4" />, color: '#7b2ff7' },
    { label: 'Nerd Level', value: 100, icon: <Brain className="w-4 h-4" />, color: '#ffbe0b', over9k: true },
  ];

  const testimonials = [
    { name: 'Mom', text: '"Beta, khana kha le pehle! Screen se aankh hata kabhi!" She doesn\'t understand that the code won\'t write itself at 3 AM. 🍛', avatar: '👩', role: 'Chief Feeding Officer' },
    { name: 'Dad', text: '"When I was your age, we didn\'t even have computers!" Yes Dad, but did you ever deploy a full-stack app before dinner? 👴', avatar: '👨', role: 'Nostalgia Manager' },
    { name: 'Coffee Machine', text: '"He\'s my #1 customer. 24/7 service contract. Sometimes I wonder if he has espresso running through his veins." ☕', avatar: '☕', role: 'Fuel Provider' },
    { name: 'The Bugs', text: '"We used to live peacefully in the codebase. Then HE came. He doesn\'t just fix bugs — he eliminates entire species of them." 🐛💀', avatar: '🐛', role: 'Former Residents' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden">
      {/* Parallax decorative images */}
      <motion.div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0" style={{ y: bgY }}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-[120px] sm:w-[160px] md:w-[210px] animate-float opacity-20" />
      </motion.div>
      <motion.div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0" style={{ y: useTransform(scrollYProgress, [0,1], [50,-50]) }}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-[100px] sm:w-[140px] md:w-[180px] animate-float-delayed opacity-20" />
      </motion.div>
      <motion.div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0" style={{ y: bgY }}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-[120px] sm:w-[160px] md:w-[210px] animate-float opacity-20" />
      </motion.div>
      <motion.div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0" style={{ y: useTransform(scrollYProgress, [0,1], [50,-50]) }}>
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-[130px] sm:w-[170px] md:w-[220px] animate-float-delayed opacity-20" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading — left aligned, enters from left */}
        <ScrollReveal direction="left" offset={80}>
          <span className="text-[#00d4ff] font-mono text-xs uppercase tracking-widest block mb-3">{'< Origin Story />'}</span>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem,12vw,140px)' }}>About me</h2>
        </ScrollReveal>

        {/* Main text — left aligned, scroll reveal from left */}
        <ScrollReveal direction="left" offset={60} className="mt-12 sm:mt-16 w-full max-w-[720px]">
  <div style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}>
    <AnimatedText
      text="It all started when I was 10 years old, staring at a screen that read Hello World — my first HTML creation. That single moment sparked something extraordinary inside me. Four years later, I've evolved from writing basic HTML tags to building full-stack applications, crafting 3D web experiences with Three.js, animating interfaces with GSAP, and exploring the frontiers of AI and machine learning. Every line of code I write is a step closer to creating something that fundamentally changes how people experience the digital world. I'm not just learning to code — I'm learning to architect the future, one commit at a time."
      className="text-[#D7E2EA] font-medium leading-relaxed text-left block w-full"
    />
  </div>
</ScrollReveal>

        {/* Quote */}
        <ScrollReveal direction="left" offset={50} className="mt-10">
          <motion.div className="flex items-center gap-3 max-w-lg px-6 py-4 rounded-2xl glass neon-border-purple" whileHover={{ boxShadow: '0 0 25px rgba(123,47,247,0.12)' }}>
            <Quote className="w-8 h-8 text-[#7b2ff7] flex-shrink-0" />
            <p className="text-[#7b2ff7] font-light italic text-left" style={{ fontSize: 'clamp(0.9rem,1.8vw,1.12rem)' }}>
              &ldquo;Age is just a syntax error — it doesn&apos;t stop the code from running.&rdquo;
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Timeline — each item slides from left */}
        <div className="mt-20 sm:mt-24">
          <ScrollReveal direction="left" offset={60}>
            <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl uppercase tracking-wider mb-10 font-mono text-left">
              <Sparkles className="inline w-5 h-5 mr-2 text-[#00d4ff]" /> Journey.timeline()
            </h3>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {timeline.map((t, i) => (
              <ScrollReveal key={i} direction="left" offset={40 + i * 15}>
                <motion.div className="cursor-pointer" onClick={() => setActiveTL(i)} whileHover={{ x: 8 }} transition={{ duration: 0.2 }}>
                  <motion.div className="p-5 sm:p-6 rounded-2xl glass transition-all duration-500"
                    style={{ border: `1px solid ${activeTL === i ? t.color + '35' : 'rgba(215,226,234,0.06)'}`, boxShadow: activeTL === i ? `0 0 25px ${t.color}08` : 'none' }}>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{t.icon}</span>
                      <div className="flex-1">
                        <div className="font-mono text-sm" style={{ color: t.color }}>Age {t.age} — {t.year}</div>
                        <div className="text-[#D7E2EA] font-bold text-lg">{t.title}</div>
                      </div>
                      <div className="w-3 h-3 rounded-full transition-all" style={{ backgroundColor: activeTL === i ? t.color : 'transparent', border: `2px solid ${activeTL === i ? t.color : 'rgba(215,226,234,0.15)'}`, boxShadow: activeTL === i ? `0 0 12px ${t.color}40` : 'none' }} />
                    </div>
                    {activeTL === i && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-[#D7E2EA]/35 text-sm mt-3 font-light leading-relaxed pl-[52px]">{t.desc}</motion.p>
                    )}
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* System Diagnostics */}
        <div className="mt-20 sm:mt-24">
          <ScrollReveal direction="left" offset={60}>
            <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl uppercase tracking-wider mb-3 font-mono"><Brain className="inline w-5 h-5 mr-2 text-[#7b2ff7]" /> system.diagnostics()</h3>
            <p className="text-[#D7E2EA]/15 text-xs font-mono mb-8">// Running deep personality scan... Results might be concerning.</p>
          </ScrollReveal>
          <ScrollReveal direction="left" offset={40}>
            <div className="flex flex-col gap-5 p-6 rounded-2xl glass neon-border max-w-2xl">
              {diags.map((d, i) => <DiagBar key={i} {...d} index={i} />)}
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials */}
        <div className="mt-20 sm:mt-24">
          <ScrollReveal direction="left" offset={60}>
            <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl uppercase tracking-wider mb-3 font-mono"><Heart className="inline w-5 h-5 mr-2 text-red-400" /> reviews.map() 😂</h3>
            <p className="text-[#D7E2EA]/15 text-xs font-mono mb-8">// 100% totally real. Definitely not made up.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} direction="left" offset={30 + i * 10}>
                <motion.div className="p-5 rounded-2xl glass neon-border cursor-default"
                  whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,212,255,0.06)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{t.avatar}</span>
                    <div><span className="text-[#D7E2EA] font-bold block">{t.name}</span><span className="text-[#00d4ff]/30 text-xs font-mono">{t.role}</span></div>
                    <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, j) => <span key={j} className="text-[#ffbe0b] text-xs">⭐</span>)}</div>
                  </div>
                  <p className="text-[#D7E2EA]/40 text-sm font-light leading-relaxed text-left">{t.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal direction="left" offset={40} className="mt-16 sm:mt-20">
          <ContactButton />
        </ScrollReveal>
      </div>
    </section>
  );
};

const DiagBar: React.FC<{ label: string; value: number; icon: React.ReactNode; color: string; index: number; over9k?: boolean }> = ({ label, value, icon, color, index, over9k }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '50px' });
  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-[#D7E2EA] text-sm font-mono"><span style={{ color }}>{icon}</span>{label}</div>
        <motion.span className="text-sm font-mono font-bold" style={{ color }}
          animate={inView && over9k ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.5, repeat: over9k ? Infinity : 0, repeatDelay: 2 }}>
          {over9k ? '> 9000!' : `${value}%`}
        </motion.span>
      </div>
      <div className="skill-bar-bg h-2.5 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full relative overflow-hidden" style={{ background: `linear-gradient(90deg,${color},${color}88)` }}
          initial={{ width: 0 }} animate={inView ? { width: `${over9k ? 100 : value}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
