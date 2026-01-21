import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, Mail, Github, Instagram, Linkedin, ExternalLink, Shield, Activity, User, Database, Award, Calendar, BookOpen, Layers, Terminal, Download, Globe, Home, MessageSquare, Lock, Cpu } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { myExperience, myArchive, myEducation, mySkills, myProjectsData } from "./data";
import AdminDashboard from "./AdminDashboard";

const MatrixRain = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none overflow-hidden">
      <div className="matrix-text text-green-500 font-mono text-[10px] leading-none whitespace-pre">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="inline-block animate-matrix" style={{ animationDelay: `${Math.random() * 5}s` }}>
            {Array.from({ length: 40 })
              .map(() => Math.floor(Math.random() * 2))
              .join("\n")}
          </div>
        ))}
      </div>
    </div>
  );
};

const IdentityCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 }}
    className="shine-card glow-border bg-[#0d0d0d] border border-green-500/40 rounded-lg overflow-hidden font-mono shadow-[0_0_30px_rgba(34,197,94,0.2)]"
  >
    <div className="bg-green-500/10 border-b border-green-500/20 px-4 py-2 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <span className="text-[10px] text-green-500/70 font-bold tracking-widest uppercase flex items-center gap-1">
        <Lock size={10} /> ENCRYPTED_PROFILE
      </span>
    </div>
    <div className="p-5 text-[12px] leading-relaxed">
      <div className="flex gap-2">
        <span className="text-pink-500">"dev_identity"</span>
        <span className="text-white">:</span> <span className="text-green-500">&#123;</span>
      </div>
      <div className="pl-6 flex gap-2">
        <span className="text-blue-400">"name"</span>
        <span className="text-white">:</span> <span className="text-yellow-400">"Muhamad Nur Salam"</span>
      </div>
      <div className="pl-6 flex gap-2">
        <span className="text-blue-400">"roles"</span>
        <span className="text-white">:</span> <span className="text-yellow-400">"Fullstack Developer"</span>
      </div>
      <div className="pl-6 flex gap-2">
        <span className="text-blue-400">"status"</span>
        <span className="text-white">:</span> <span className="text-red-400">"Engginering"</span>
      </div>
      <div className="flex text-green-500">&#125;</div>
    </div>
  </motion.div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 relative">
    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="absolute -top-4 left-0 h-[1px] bg-green-500/20" />
    <h2 className="text-4xl font-mono font-black text-green-500 flex items-center gap-3 tracking-tighter italic">
      <Cpu size={28} className="text-green-400 animate-pulse" /> {title}
    </h2>
    <p className="mt-2 text-gray-500 font-mono text-xs tracking-[0.3em] uppercase">{"firewall_log // " + subtitle}</p>
  </div>
);

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    e.target.reset();
  };

  if (loadingPercent < 100) {
    return (
      <div className="bg-black h-screen flex flex-col items-center justify-center font-mono text-green-500">
        <div className="mb-4 text-xs tracking-[0.5em] animate-pulse">LOADING_DULU_CUY...</div>
        <div className="w-64 h-1 border border-green-900 bg-black overflow-hidden relative">
          <motion.div className="h-full bg-green-500 shadow-[0_0_15px_#22c55e]" initial={{ width: 0 }} animate={{ width: `${loadingPercent}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-green-500 min-h-screen font-mono selection:bg-green-500 selection:text-black overflow-x-hidden relative">
      <MatrixRain />

      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>

      {/* NAVBAR DESKTOP */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/10 px-6 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span className="flex items-center gap-2 font-bold text-green-400 uppercase tracking-widest">
            <Shield size={14} className="animate-pulse" /> SYSTEM_ACTIVE
          </span>
          <div className="flex gap-8 uppercase tracking-[0.2em] font-bold">
            {["home", "about", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-white transition-all hover:glow-text">
                ./{item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* NAVBAR MOBILE */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[400px]">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/40 backdrop-blur-2xl border border-green-500/30 rounded-2xl px-6 py-3 flex justify-between items-center shadow-[0_0_25px_rgba(34,197,94,0.3)]"
        >
          <a href="#home" className="text-green-500 p-2 hover:bg-green-500/10 rounded-xl transition-all">
            <Home size={22} />
          </a>
          <a href="#about" className="text-green-500 p-2 hover:bg-green-500/10 rounded-xl transition-all">
            <User size={22} />
          </a>
          <a href="#projects" className="text-green-500 p-2 hover:bg-green-500/10 rounded-xl transition-all">
            <Code size={22} />
          </a>
          <a href="#contact" className="text-green-500 p-2 hover:bg-green-500/10 rounded-xl transition-all">
            <MessageSquare size={22} />
          </a>
        </motion.nav>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-32">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/5 text-[10px] font-bold tracking-[0.2em] text-green-400 uppercase">
                &gt; Status: <span className="text-red-500 animate-pulse">Active</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] uppercase">
                <span className="text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <TypeAnimation sequence={["FULLSTACK", 2000, "DEVELOPER"]} repeat={Infinity} />
                </span>
              </h1>
              <p className="text-gray-400 border-l-2 border-green-500/30 pl-6 italic max-w-xl text-sm md:text-base">"Spesialisasi dalam eksploitasi kode Front-End dan pertahanan infrastruktur Back-End menggunakan PHP & React."</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="bg-green-500 text-black px-8 py-4 font-bold text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2 uppercase">
                  <Terminal size={16} />
                  MY_PROJECTS
                </a>
                <a href="/CV_Muhamad Nur Salam.pdf" download className="border border-green-500 text-green-500 px-8 py-4 font-bold text-xs hover:bg-green-500 hover:text-black transition-all flex items-center gap-2 uppercase">
                  <Download size={16} /> Download_CV
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 w-full aspect-[3/4] max-w-[400px] mx-auto group">
                <div className="absolute inset-0 border border-green-500/50 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                <div className="shine-card glow-border relative z-10 h-full w-full overflow-hidden border border-green-500 bg-neutral-900">
                  <img src="/hero.png" className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-105" alt="Profile" />
                </div>
                <div className="absolute -bottom-12 -left-12 z-30 hidden md:block w-80">
                  <IdentityCard />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 space-y-24">
          <SectionTitle title="IDENT_CORE" subtitle="decrypting_biography" />
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="shine-card glow-border bg-green-500/5 border border-green-500/20 p-8 rounded-sm">
                <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-3">
                  <User size={24} className="text-green-500" /> TENTANG_SAYA
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  Saya adalah Mahasiswa Teknik Informatika UNPAS dengan spesialisasi Fullstack Development. Fokus pada keamanan integritas data dan antarmuka pengguna yang responsif.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-white font-bold text-2xl flex items-center gap-3">
                  <Briefcase size={24} className="text-green-500" /> WORK_EXPERIENCE
                </h3>
                {myExperience.map((exp, i) => (
                  <motion.div key={i} className="shine-card glow-border bg-green-500/5 border border-green-500/20 p-6 rounded-sm">
                    <div className="text-[10px] text-green-500 font-bold mb-2 uppercase flex items-center gap-2">
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <h4 className="text-white font-bold text-lg">{exp.company}</h4>
                    <p className="text-green-900 text-xs font-bold uppercase mb-2">{exp.role}</p>
                    <p className="text-xs text-gray-500">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="shine-card glow-border bg-green-500/5 border border-green-500/20 p-6">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <Layers size={18} className="text-green-500" /> SKILLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mySkills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-[10px] text-green-400 uppercase font-bold hover:bg-green-500 hover:text-black transition-all cursor-crosshair">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shine-card glow-border bg-green-500/5 border border-green-500/20 p-6">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <Award size={18} className="text-green-500" /> CERTIFICATES
                </h3>
                {myArchive.map((cert, i) => (
                  <div key={i} className="mb-4 last:mb-0 border-l-2 border-green-500/20 pl-4 group hover:border-green-500 transition-all">
                    <h4 className="text-white font-bold text-[11px] uppercase group-hover:text-green-400">{cert.title}</h4>
                    <p className="text-[9px] text-gray-600 italic">
                      {cert.issuer} // {cert.year}
                    </p>
                  </div>
                ))}
              </div>
              <div className="shine-card glow-border bg-green-500/5 border border-green-500/20 p-6">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                  <BookOpen size={18} className="text-green-500" /> EDUCATION
                </h3>
                {myEducation.map((edu, i) => (
                  <div key={i} className="mb-4 last:mb-0 border-l-2 border-green-500/20 pl-4">
                    <h4 className="text-white font-bold text-[11px] uppercase">{edu.school}</h4>
                    <p className="text-[9px] text-gray-500">{edu.major}</p>
                    <p className="text-[8px] text-gray-600 italic">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <SectionTitle title="PROJECT" subtitle="ls -l ./work_archive" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjectsData.map((p, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="shine-card glow-border group relative bg-green-500/5 border border-green-500/20 overflow-hidden">
                <div className="h-48 overflow-hidden border-b border-green-500/20 relative">
                  <div className="absolute top-2 right-2 z-20 bg-black/80 px-2 py-1 border border-green-500/30 text-[8px] font-bold">SECURE_CUY</div>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-white font-black text-xl group-hover:text-green-500 transition-colors uppercase tracking-tighter">{p.title}</h4>
                  <p className="text-[11px] text-gray-500 font-mono h-[45px] leading-relaxed">{p.desc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-500/5 border border-green-500/30 text-green-500 flex items-center justify-center gap-2 text-[10px] font-bold hover:bg-green-500 hover:text-black transition-all uppercase tracking-widest"
                  >
                    <Globe size={14} /> KUNJUNGI_PROJECT
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <SectionTitle title="CONTACT" subtitle="establishing_secure_uplink" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                AYO MULAI <span className="text-green-500 underline decoration-green-500/30">DISKUSI.</span>
              </h3>
              <p className="text-gray-500 text-sm font-mono leading-relaxed">Pesan Anda akan dienkripsi ujung-ke-ujung sebelum dikirim ke server pusat.</p>

              <div className="space-y-4">
                <div className="shine-card glow-border flex items-center gap-6 p-4 bg-green-500/5 border border-green-500/10 hover:border-green-500/40 transition-all">
                  <div className="p-2 bg-green-500/10 text-green-500 rounded">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-green-900 font-bold uppercase">Email</p>
                    <p className="text-white font-mono text-sm">aaallaaamm03@gmail.com</p>
                  </div>
                </div>
                <div className="shine-card glow-border flex items-center gap-6 p-4 bg-green-500/5 border border-green-500/10 hover:border-green-500/40 transition-all">
                  <div className="p-2 bg-green-500/10 text-green-500 rounded">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-green-900 font-bold uppercase">WhatsApp</p>
                    <p className="text-white font-mono text-sm">+62 856-0310-3375</p>
                  </div>
                </div>
                <div className="shine-card glow-border flex items-center gap-6 p-4 bg-green-500/5 border border-green-500/10 hover:border-green-500/40 transition-all">
                  <div className="p-2 bg-green-500/10 text-green-500 rounded">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-green-900 font-bold uppercase">Location</p>
                    <p className="text-white font-mono text-sm">Kota Bandung | IDN </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-[10px] text-green-900 font-bold uppercase tracking-[0.3em]">Social Media Information</p>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={20} />, link: "https://github.com/Lam89-Pass" },
                    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/muhamadnursalam" },
                    { icon: <Instagram size={20} />, link: "https://instagram.com/lam.xyz_" },
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center border border-green-500/20 text-green-500 hover:bg-green-500 hover:text-black transition-all shadow-[0_0_10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div className="shine-card glow-border bg-[#050505] border border-green-500/30">
              <div className="bg-green-500/10 p-4 border-b border-green-500/20 text-green-500 text-[10px] font-bold uppercase flex justify-between items-center">
                <span>
                  <Terminal size={12} className="inline mr-2" />
                  Secure_Packet_Transmission
                </span>
                <span className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="opacity-50 tracking-tighter">CONNECTED</span>
                </span>
              </div>
              <form onSubmit={handleSubmit} className="p-8 space-y-6 font-mono">
                <div className="space-y-1">
                  <label className="text-[9px] text-green-900 font-bold uppercase">Name</label>
                  <input required type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-green-900/50 outline-none text-white py-2 text-sm uppercase focus:border-green-500 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-green-900 font-bold uppercase">Email</label>
                  <input required type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-green-900/50 outline-none text-white py-2 text-sm uppercase focus:border-green-500 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-green-900 font-bold uppercase">Message</label>
                  <textarea
                    required
                    placeholder="ENTER_ENCRYPTED_MESSAGE..."
                    className="w-full bg-green-500/5 border border-green-900/30 outline-none p-4 text-white text-sm h-32 resize-none uppercase focus:border-green-500 transition-all"
                  />
                </div>
                <button type="submit" className="w-full bg-green-500 text-black py-4 font-black text-[10px] tracking-[0.4em] hover:bg-white transition-all active:scale-[0.98]">
                  KIRIM_PESAN
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-900/20 py-16 text-center relative z-10 bg-black">
        <p className="text-[11px] text-white font-black tracking-[0.5em] uppercase">Muhamad Nur Salam</p>
        <p className="text-[9px] text-green-900 font-mono italic mt-2 uppercase">Fullstack Developer // Informatics Engginering // 404 ERROR</p>
      </footer>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="shine-card border border-green-500 bg-[#0a0a0a] max-w-sm w-full font-mono shadow-[0_0_50px_rgba(34,197,94,0.4)]"
            >
              <div className="bg-green-500 text-black p-2 text-[10px] font-bold text-center uppercase tracking-widest">Packet_Accepted</div>
              <div className="p-8 text-center space-y-4">
                <Shield className="text-green-500 mx-auto animate-bounce" size={48} />
                <h3 className="text-xl font-black text-green-400 italic uppercase">SUCCESS!</h3>
                <p className="text-[11px] text-gray-400">Data telah berhasil dienkripsi dan dikirim ke sistem pusat.</p>
                <div className="h-1 w-full bg-green-900/30 mt-4 overflow-hidden">
                  <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 4, ease: "linear" }} className="h-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
