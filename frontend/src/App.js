import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code, Briefcase, Mail, Github, Instagram, Linkedin, ExternalLink, ChevronRight, Video, Cpu, Shield, Activity, Lock } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// --- Matrix Background Effect ---
const MatrixRain = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden">
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

const myProjects = [
  { title: "CYBER_WATCH_V1", tech: ["React", "Python"], desc: "Sistem monitoring enkripsi data real-time.", link: "#" },
  { title: "NEURAL_LINK_UI", tech: ["Next.js", "Tailwind"], desc: "Antarmuka saraf untuk integrasi AI kustom.", link: "#" },
  { title: "PASUNDAN_CORE", tech: ["Node.js", "Socket.io"], desc: "Mainframe komunikasi terenkripsi antar mahasiswa.", link: "#" },
];

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-16 relative">
    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="absolute -top-4 left-0 h-[1px] bg-green-500/20" />
    <h2 className="text-4xl font-mono font-black text-green-500 flex items-center gap-3 tracking-tighter italic">
      <Activity size={28} className="text-green-400" /> {title}
    </h2>
    <p className="mt-2 text-gray-500 font-mono text-xs tracking-[0.3em] uppercase">{"sys_log // " + subtitle}</p>
  </div>
);

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);

  // Efek loading ala hacker saat pertama buka
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (loadingPercent < 100) {
    return (
      <div className="bg-black h-screen flex flex-col items-center justify-center font-mono text-green-500">
        <div className="mb-4">INITIALIZING_GHALYN_OS...</div>
        <div className="w-64 h-2 border border-green-900 bg-black overflow-hidden">
          <motion.div className="h-full bg-green-500" initial={{ width: 0 }} animate={{ width: `${loadingPercent}%` }} />
        </div>
        <div className="mt-2 text-[10px]">{loadingPercent}% COMPLETED</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-green-500 min-h-screen font-mono selection:bg-green-500 selection:text-black overflow-x-hidden relative">
      <MatrixRain />

      {/* Decorative Cyber Lines */}
      <div className="fixed inset-0 border-[20px] border-white/[0.02] pointer-events-none z-50 shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-bold animate-pulse">
              <Shield size={14} /> SECURITY: ENCRYPTED
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline text-gray-500">IP: 192.168.1.104</span>
          </div>
          <div className="flex gap-6 uppercase tracking-widest">
            {["home", "about", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-white transition-all">
                ./{item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs mb-4 text-green-900 font-bold tracking-widest leading-none">
                {`> BOOT_SEQUENCE_SUCCESSFUL`} <br />
                {`> ACCESS_GRANTED_TO_SYSTEM`}
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                <TypeAnimation sequence={["GHALYN", 2000, "OPERATOR", 2000, "ROOT_USER", 2000]} repeat={Infinity} />
              </h1>
              <p className="text-lg text-green-400/80 max-w-xl leading-relaxed mb-10 border-l-2 border-green-500/50 pl-6 italic">
                {`"Spesialisasi dalam membongkar desain UI yang kaku dan menyusun ulang kode menjadi pengalaman digital yang gacor."`}
              </p>
              <div className="flex gap-4">
                <button className="bg-green-500 text-black px-8 py-4 font-bold uppercase text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2">
                  <Lock size={14} /> DECRYPT_PORTFOLIO
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-2 opacity-40">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-20 border border-green-900 flex items-center justify-center text-[8px] text-green-900 font-bold overflow-hidden">
                    {Math.random().toString(36).substring(7).toUpperCase()} <br /> 0x00FF{i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24">
          <SectionTitle title="IDENT_BIO" subtitle="whoami --details" />
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="relative group overflow-hidden border border-green-500/30 p-2">
              <div className="absolute top-0 left-0 p-2 bg-green-500 text-black text-[10px] font-bold z-20">PROFILE_ID</div>
              <img src="/public/hero.png" className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" alt="ghalyn" />
              <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-green-500/5 border border-green-500/20 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[40px] opacity-5 text-green-500 font-black">UNPAS</div>
                <h3 className="text-white font-bold text-xl mb-4 tracking-tighter">GHALYN_SYSTEM_CORE</h3>
                <p className="text-sm leading-relaxed text-green-400/70 italic">
                  Mahasiswa Teknik Informatika Universitas Pasundan. Menguasai arsitektur React dengan keahlian khusus pada manipulasi DOM dan animasi modern. Menghabiskan malam untuk debugging dan membangun masa depan web yang lebih
                  interaktif.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-green-900 p-4">
                  <div className="text-[10px] text-green-900 mb-2 uppercase tracking-widest">Education_Log</div>
                  <div className="text-white font-bold">Unpas Informatics // 2023 - 2027</div>
                </div>
                <div className="border border-green-900 p-4">
                  <div className="text-[10px] text-green-900 mb-2 uppercase tracking-widest">Current_Task</div>
                  <div className="text-white font-bold animate-pulse">FRONTEND_ENGINEER_FREELANCE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <SectionTitle title="DATA_ARCHIVE" subtitle="ls ./active_projects" />
          <div className="grid md:grid-cols-3 gap-6">
            {myProjects.map((p, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="border border-green-500/20 bg-green-500/[0.02] p-6 hover:border-green-500 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-green-500/10 text-green-500 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all">
                    <Code size={20} />
                  </div>
                  <div className="text-[10px] text-green-900">ID: 00{idx}</div>
                </div>
                <h4 className="text-white font-black text-xl mb-2 tracking-tighter">{p.title}</h4>
                <p className="text-xs text-gray-500 mb-6 font-mono leading-relaxed">{p.desc}</p>
                <div className="flex gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[8px] border border-green-900 px-2 py-0.5 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} className="text-[10px] text-green-500 flex items-center gap-2 hover:underline">
                  OPEN_SOURCE_CODE <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <SectionTitle title="COMMS_CHANNEL" subtitle="establish --connection" />
          <div className="max-w-2xl mx-auto border border-green-500/30">
            <div className="bg-green-500/10 p-4 border-b border-green-500/30 flex justify-between items-center">
              <span className="text-xs font-bold tracking-widest">SSH_SECURE_INPUT</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-900 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <span className="text-green-900">NAME:</span>
                  <input required type="text" className="bg-transparent border-b border-green-900 outline-none flex-1 text-white py-2 focus:border-green-500 transition-all text-sm" />
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-green-900">EMAIL:</span>
                  <input required type="email" className="bg-transparent border-b border-green-900 outline-none flex-1 text-white py-2 focus:border-green-500 transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <div className="text-green-900">MSG_CONTENT:</div>
                  <textarea required className="w-full bg-green-500/5 border border-green-900 outline-none p-4 text-white focus:border-green-500 transition-all text-sm h-32 resize-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-green-500/10 border border-green-500 text-green-500 py-4 font-bold text-xs hover:bg-green-500 hover:text-black transition-all">
                TRANSMIT_DATA
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-green-900/30 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-green-900 font-mono italic">PORT_GHALYN v2.0 // STATUS: [SECURE] // RECV_BUFFER: 0x0</div>
          <div className="flex gap-8">
            <a href="#" className="text-green-900 hover:text-green-500">
              <Github size={18} />
            </a>
            <a href="#" className="text-green-900 hover:text-green-500">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-green-900 hover:text-green-500">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* POPUP OVERLAY */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="border-2 border-green-500 bg-black max-w-sm w-full font-mono overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.3)]"
            >
              <div className="bg-green-500 text-black p-2 text-[10px] font-bold">CRITICAL_NOTIFICATION</div>
              <div className="p-8 text-center space-y-6">
                <div className="text-4xl animate-bounce">⚡</div>
                <h3 className="text-xl font-black text-green-400 tracking-tighter italic">DATA_TRANSMITTED!</h3>
                <p className="text-xs text-green-900 italic">Pesan telah berhasil di-enkripsi dan dikirim ke mainframe pusat. Tunggu balasan segera.</p>
                <button onClick={() => setIsSubmitted(false)} className="w-full bg-green-500 text-black py-2 font-bold text-[10px]">
                  CLOSE_SESSION
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
