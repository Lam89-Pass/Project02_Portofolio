import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Briefcase, Mail, Github, Instagram, Linkedin, ExternalLink, Cpu, Shield, Activity, User, Database, Award, Calendar, BookOpen, Layers, Terminal, Download, Globe } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { myExperience, myArchive, myEducation, mySkills, myProjectsData } from "./data";

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

const IdentityCard = () => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="bg-[#0d0d0d] border border-green-500/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.2)] font-mono">
    <div className="bg-green-500/10 border-b border-green-500/20 px-4 py-2 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <span className="text-[10px] text-green-500/70 ml-2 font-bold tracking-widest uppercase">profile_manifest.json</span>
    </div>
    <div className="p-5 text-[12px] leading-relaxed">
      <div className="flex gap-2">
        <span className="text-pink-500">"developer"</span>
        <span className="text-white">:</span> <span className="text-green-500">&#123;</span>
      </div>
      <div className="pl-6 flex gap-2">
        <span className="text-blue-400">"nama"</span>
        <span className="text-white">:</span> <span className="text-yellow-400">"Muhamad Nur Salam"</span>
        <span className="text-white">,</span>
      </div>
      <div className="pl-6 flex gap-2">
        <span className="text-blue-400">"role"</span>
        <span className="text-white">:</span> <span className="text-yellow-400">"Fullstack Developer"</span>
        <span className="text-white">,</span>
      </div>
      <div className="pl-6 flex gap-2">
        <span className="text-blue-400">"prodi"</span>
        <span className="text-white">:</span> <span className="text-yellow-400">"Informatics Engineering"</span>
      </div>
      <div className="flex text-green-500">&#125;</div>
    </div>
  </motion.div>
);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (loadingPercent < 100) {
    return (
      <div className="bg-black h-screen flex flex-col items-center justify-center font-mono text-green-500">
        <div className="mb-4 text-xs tracking-[0.5em] animate-pulse">LOADING DULU BOS...</div>
        <div className="w-64 h-1 border border-green-900 bg-black overflow-hidden relative">
          <motion.div className="h-full bg-green-500 shadow-[0_0_15px_#22c55e]" initial={{ width: 0 }} animate={{ width: `${loadingPercent}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-green-500 min-h-screen font-mono selection:bg-green-500 selection:text-black overflow-x-hidden relative">
      <MatrixRain />

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-bold text-green-400 uppercase tracking-widest">
              <Shield size={14} className="animate-pulse" />
              System_Online
            </span>
          </div>
          <div className="flex gap-8 uppercase tracking-[0.2em] font-bold">
            {["home", "about", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-white transition-all">
                ./{item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center -mt-10 md:-mt-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/5 text-[10px] font-bold tracking-[0.2em] text-green-400 uppercase">
                &gt; Status: <span className="animate-pulse">Active</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.85]">
                <span className="text-green-500 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] uppercase">
                  <TypeAnimation sequence={["FULLSTACK", 2000, "DEVELOPER"]} repeat={Infinity} />
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed border-l-2 border-green-500/30 pl-6 italic">
                {`"Mahasiswa Teknik Informatika UNPAS yang ahli dalam Fullstack PHP Native dan Front-End Development. Fokus pada pembuatan UI/UX yang responsif serta adaptif."`}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="bg-green-500 text-black px-8 py-4 font-bold uppercase text-xs hover:bg-white transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-3">
                  <Database size={16} /> ACCESS_PROJECTS
                </a>
                <a href="/CV_Muhamad Nur Salam.pdf" download className="border border-green-500 text-green-500 px-8 py-4 font-bold uppercase text-xs hover:bg-green-500 hover:text-black transition-all flex items-center gap-3">
                  <Download size={16} /> DOWNLOAD_CV
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 w-full aspect-[3/4] max-w-[400px] mx-auto group">
                <div className="absolute inset-0 border border-green-500/50 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                <div className="relative z-10 h-full w-full overflow-hidden border border-green-500 bg-neutral-900">
                  <img src="/hero.png" className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" alt="Muhamad Nur Salam" />
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
          <SectionTitle title="IDENT_BIO" subtitle="whoami --all" />
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="relative">
                <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                  <User size={24} className="text-green-500" /> TENTANG SAYA
                </h3>
                <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-green-500 group-hover:h-full transition-all duration-500" />
                  <p className="text-sm leading-relaxed text-gray-400 italic">
                    Saya adalah Mahasiswa S1 Teknik Informatika dari Universitas Pasundan yang memiliki spesialisasi dalam Fullstack PHP Native dan Front-End Development. Berpengalaman dalam lingkungan kerja WFH sebagai Junior Developer,
                    fokus pada UI/UX yang adaptif.
                  </p>
                </div>
              </div>
              <div className="relative">
                <h3 className="text-white font-bold text-2xl mb-10 flex items-center gap-3">
                  <Briefcase size={24} className="text-green-500" /> EXPERIENCE
                </h3>
                <div className="ml-4 border-l border-green-500/30 space-y-12">
                  {myExperience.map((exp, i) => (
                    <div key={i} className="relative pl-10 group">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-green-500 group-hover:scale-125 transition-all shadow-[0_0_10px_#22c55e]" />
                      <div className="text-[10px] text-green-500 font-bold mb-1 flex items-center gap-2 uppercase tracking-widest">
                        <Calendar size={12} /> {exp.period}
                      </div>
                      <h4 className="text-white font-bold text-lg">{exp.company}</h4>
                      <p className="text-green-900 text-[11px] font-bold mb-3 uppercase">{exp.role}</p>
                      <p className="text-xs text-gray-500 leading-relaxed max-w-xl">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-16">
              <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-green-500/20 pb-2">
                  <BookOpen size={18} className="text-green-500" /> EDUCATION
                </h3>
                <div className="space-y-6">
                  {myEducation.map((edu, i) => (
                    <div key={i} className="group">
                      <h4 className="text-green-400 font-bold text-sm">{edu.school}</h4>
                      <p className="text-white text-xs">{edu.major}</p>
                      <p className="text-[10px] text-gray-600 italic">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-green-500/20 pb-2">
                  <Layers size={18} className="text-green-500" /> SKILLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mySkills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-500/5 border border-green-500/20 text-[10px] text-green-500 font-bold hover:bg-green-500 hover:text-black transition-all uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 border-b border-green-500/20 pb-2">
                  <Award size={18} className="text-green-500" /> ARCHIVE
                </h3>
                <div className="space-y-4">
                  {myArchive.map((cert, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="text-green-900 font-mono text-[10px] pt-1">0{i + 1}</div>
                      <div>
                        <h4 className="text-white font-bold text-[11px] group-hover:text-green-500 transition-colors uppercase">{cert.title}</h4>
                        <p className="text-[10px] text-gray-600 italic">
                          {cert.issuer} // {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <SectionTitle title="PROJECT_LIST" subtitle="ls -l ./work_archive" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjectsData.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#080808] border border-green-500/20 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-green-500/20">
                  <div className="absolute inset-0 bg-green-500/20 z-10 group-hover:bg-transparent transition-all duration-500" />
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-white font-black text-xl tracking-tighter group-hover:text-green-500 transition-colors">{p.title}</h4>
                    <div className="p-2 bg-green-500/10 text-green-500 rounded-sm">
                      <Code size={18} />
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 font-mono leading-relaxed min-h-[45px]">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[9px] border border-green-900/50 px-2 py-0.5 text-green-700 font-bold bg-green-500/5 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-green-500/5 border border-green-500/30 text-green-500 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] hover:bg-green-500 hover:text-black transition-all group/btn"
                    >
                      <Globe size={14} className="group-hover/btn:animate-spin" /> LAUNCH_APPLICATION <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <SectionTitle title="CONNECT_SYS" subtitle="establish --secure-line" />
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white italic tracking-tighter">
                  AYO MULAI <span className="text-green-500 underline decoration-green-500/30">DISKUSI.</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md font-mono">Saluran komunikasi terbuka untuk kolaborasi. Sistem enkripsi aktif untuk menjaga privasi data Anda.</p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-green-500" />, label: "EMAIL", val: "aaallaaamm03@gmail.com" },
                  { icon: <Globe className="text-green-500" />, label: "LOKASI", val: "Kota Bandung, IDN" },
                  { icon: <Activity className="text-green-500" />, label: "PHONE", val: "+62 856-0310-3375" },
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-6 p-4 bg-green-500/5 border border-green-500/10 hover:border-green-500/40 transition-all group">
                    <div className="p-3 bg-black border border-green-500/20 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all">{item.icon}</div>
                    <div>
                      <p className="text-[10px] text-green-900 font-bold tracking-widest uppercase">{item.label}</p>
                      <p className="text-white font-mono text-sm">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="pt-6">
                <p className="text-[10px] text-green-900 font-bold mb-4 tracking-[0.3em] uppercase">Social_Transmission</p>
                <div className="flex gap-4">
                  {[<Github />, <Linkedin />, <Instagram />].map((icon, i) => (
                    <motion.a key={i} href="#" whileHover={{ y: -5, scale: 1.1 }} className="w-12 h-12 flex items-center justify-center border border-green-500/20 text-green-500 hover:bg-green-500 hover:text-black transition-all">
                      {React.cloneElement(icon, { size: 20 })}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#050505] border border-green-500/30 relative z-10">
              <div className="bg-green-500/10 p-4 border-b border-green-500/20 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">Secure_Terminal_v4</span>
              </div>
              <form onSubmit={handleSubmit} className="p-8 space-y-6 font-mono">
                <div className="space-y-2">
                  <label className="text-[10px] text-green-900 font-bold uppercase">Identification_Name</label>
                  <input
                    required
                    type="text"
                    placeholder="GUEST_USER"
                    className="w-full bg-transparent border-b border-green-900/50 outline-none text-white py-2 focus:border-green-500 transition-all text-sm uppercase placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-green-900 font-bold uppercase">Return_Endpoint (Email)</label>
                  <input
                    required
                    type="email"
                    placeholder="USER@HOST.COM"
                    className="w-full bg-transparent border-b border-green-900/50 outline-none text-white py-2 focus:border-green-500 transition-all text-sm uppercase placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-green-900 font-bold uppercase">Payload_Message</label>
                  <textarea
                    required
                    placeholder="ENTER_DATA..."
                    className="w-full bg-green-500/5 border border-green-900/30 outline-none p-4 text-white focus:border-green-500 transition-all text-sm h-32 resize-none uppercase placeholder:opacity-20"
                  />
                </div>
                <button type="submit" className="w-full bg-green-50 text-black py-4 font-black text-[10px] tracking-[0.4em] uppercase hover:bg-green-500 transition-all flex items-center justify-center gap-3">
                  <Terminal size={16} /> TRANSMIT_DATA
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-900/20 py-16 px-6 bg-black relative z-10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="w-12 h-[1px] bg-green-500/50 mb-4" />
          <div className="space-y-2">
            <p className="text-[11px] text-white font-black tracking-[0.5em] uppercase">Muhamad Nur Salam</p>
            <p className="text-[9px] text-green-900 font-mono tracking-widest uppercase italic">Fullstack Developer // Informatics Engineering // UNPAS 2024</p>
          </div>
          <div className="text-[8px] text-gray-700 font-mono mt-8 uppercase tracking-widest">
            <span className="text-green-900/50">Encrypted Connection // Built_ID: 0x9923_SALAM</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="border border-green-500 bg-[#050505] max-w-sm w-full font-mono overflow-hidden">
              <div className="bg-green-500 text-black p-2 text-[10px] font-bold text-center tracking-widest uppercase">Success_Update</div>
              <div className="p-10 text-center space-y-6">
                <h3 className="text-xl font-black text-green-400 italic uppercase">Packet_Sent!</h3>
                <p className="text-[11px] text-green-900 italic">Terima kasih. Pesan telah dikirim ke aaallaaamm03@gmail.com.</p>
                <button onClick={() => setIsSubmitted(false)} className="w-full border border-green-500 text-green-500 py-3 font-bold text-[10px] hover:bg-green-500 hover:text-black transition-all uppercase">
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
