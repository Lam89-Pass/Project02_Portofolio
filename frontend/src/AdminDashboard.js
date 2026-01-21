import React, { useState } from "react";
import { LayoutDashboard, FolderPlus, Settings, LogOut, Edit3, Trash2, Save, User, Award, BookOpen, Briefcase, Mail, Activity, Shield, Terminal, Plus, Globe, MessageSquare } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const [activeSubTab, setActiveSubTab] = useState("about_me");

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-green-500/30 p-6 flex flex-col gap-8">
        <div className="text-xl font-black tracking-tighter italic border-b border-green-500/30 pb-4 flex items-center gap-2">
          <Shield size={20} className="text-green-400" /> ADMIN_PANEL_V1
        </div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("about")}
            className={`flex items-center gap-3 p-2 transition-all text-xs font-bold ${activeTab === "about" ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]" : "hover:bg-green-500/10 text-green-700"}`}
          >
            <User size={16} /> MANAGE_ABOUT
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-3 p-2 transition-all text-xs font-bold ${activeTab === "projects" ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]" : "hover:bg-green-500/10 text-green-700"}`}
          >
            <FolderPlus size={16} /> MANAGE_PROJECTS
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex items-center gap-3 p-2 transition-all text-xs font-bold ${activeTab === "contact" ? "bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]" : "hover:bg-green-500/10 text-green-700"}`}
          >
            <MessageSquare size={16} /> MANAGE_CONTACT
          </button>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center gap-3 p-2 text-red-900 hover:text-red-500 transition-all text-[10px] font-bold uppercase tracking-widest">
            <LogOut size={14} /> TERMINATE_SESSION
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10 flex justify-between items-end border-b border-green-900/30 pb-6">
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              Control_Center <span className="text-green-500">.exe</span>
            </h1>
            <p className="text-[10px] text-green-900 tracking-widest uppercase mt-1">/root/dashboard/{activeTab}</p>
          </div>
          <div className="text-[10px] text-right font-bold">
            STATUS: <span className="text-white animate-pulse">ADMIN_AUTHENTICATED</span>
            <br />
            IP: 192.168.1.XX // <span className="text-green-800">UPLINK_SECURE</span>
          </div>
        </header>

        {activeTab === "about" && <AboutManager activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} />}
        {activeTab === "projects" && <ProjectManager />}
        {activeTab === "contact" && <ContactManager />}
      </main>
    </div>
  );
}

// 1. MANAGEMENT ABOUT
function AboutManager({ activeSubTab, setActiveSubTab }) {
  const subMenus = [
    { id: "about_me", label: "Bio", icon: <User size={12} /> },
    { id: "skills", label: "Skills", icon: <Activity size={12} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={12} /> },
    { id: "education", label: "Education", icon: <BookOpen size={12} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={12} /> },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex gap-2 overflow-x-auto border-b border-green-900/30 pb-4">
        {subMenus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setActiveSubTab(menu.id)}
            className={`px-4 py-2 text-[10px] font-bold uppercase flex items-center gap-2 transition-all border ${activeSubTab === menu.id ? "bg-green-500 text-black border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "border-green-900/50 text-green-800 hover:border-green-500"}`}
          >
            {menu.icon} {menu.label}
          </button>
        ))}
      </div>

      <div className="bg-green-500/5 border border-green-500/20 p-8 shadow-inner">
        <h2 className="text-white text-sm font-bold mb-6 flex items-center gap-2 uppercase italic tracking-widest">
          <Terminal size={14} className="text-green-500" /> Edit_{activeSubTab.replace("_", " ")}
        </h2>
        <textarea className="w-full bg-black/50 border border-green-900 p-4 text-white text-sm outline-none focus:border-green-500 h-48 font-mono" placeholder={`Masukan data ${activeSubTab}...`}></textarea>
        <button className="mt-6 bg-green-500 text-black px-8 py-3 text-[10px] font-black tracking-[.3em] uppercase hover:bg-white transition-all flex items-center gap-2">
          <Save size={14} /> UPDATE_CORE_DATA
        </button>
      </div>
    </div>
  );
}

// 2. MANAGEMENT PROJECTS
function ProjectManager() {
  const categories = ["Cyber Security", "Web Developper", "Design", "IoT", "Game Developper"];

  return (
    <div className="grid lg:grid-cols-2 gap-10 animate-in slide-in-from-bottom-5 duration-500">
      {/* Add New Project Form */}
      <div className="bg-green-500/5 p-8 border border-green-500/20 space-y-5">
        <h3 className="text-white font-bold text-xs uppercase italic tracking-widest border-b border-green-900/50 pb-3 flex items-center gap-2">
          <Plus size={16} className="text-green-500" /> Deploy_New_Project
        </h3>
        <div className="space-y-4">
          <div className="group">
            <label className="text-[9px] text-green-900 font-bold uppercase mb-1 block group-hover:text-green-500">Project_Title</label>
            <input type="text" className="w-full bg-black border border-green-900 p-3 text-sm text-white outline-none focus:border-green-500 transition-all" />
          </div>
          <div className="group">
            <label className="text-[9px] text-green-900 font-bold uppercase mb-1 block group-hover:text-green-500">Category_Segment</label>
            <select className="w-full bg-black border border-green-900 p-3 text-sm text-white outline-none focus:border-green-500 appearance-none">
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="group">
            <label className="text-[9px] text-green-900 font-bold uppercase mb-1 block group-hover:text-green-500">Uplink_URL (Link)</label>
            <input type="text" className="w-full bg-black border border-green-900 p-3 text-sm text-white outline-none focus:border-green-500" placeholder="https://..." />
          </div>
          <div className="group">
            <label className="text-[9px] text-green-900 font-bold uppercase mb-1 block group-hover:text-green-500">Visual_Asset (Photo)</label>
            <input
              type="file"
              className="block w-full text-[10px] text-green-800 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-bold file:bg-green-900/20 file:text-green-500 hover:file:bg-green-900/40 cursor-pointer"
            />
          </div>
          <div className="group">
            <label className="text-[9px] text-green-900 font-bold uppercase mb-1 block group-hover:text-green-500">Core_Description</label>
            <textarea className="w-full bg-black border border-green-900 p-3 text-sm text-white outline-none focus:border-green-500 h-24 resize-none"></textarea>
          </div>
          <button className="w-full bg-green-500 text-black py-4 font-black text-[10px] tracking-[.3em] hover:bg-white transition-all uppercase">Initialize_Upload</button>
        </div>
      </div>

      {/* Project List Preview */}
      <div className="space-y-6">
        <h3 className="text-white font-bold text-xs uppercase italic tracking-widest border-b border-green-900/50 pb-3">Active_Archives</h3>
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-green-900/50 p-4 flex justify-between items-center group hover:bg-green-500/5 hover:border-green-500 transition-all">
              <div>
                <div className="text-[8px] text-green-900 font-bold mb-1 italic">#DATA_STREAM_00{i}</div>
                <div className="text-white text-sm font-bold uppercase">SEIKOMOTOR_V{i}</div>
                <div className="text-[9px] text-green-800 mt-1 uppercase">Tech: PHP, MySQL // Web Developper</div>
              </div>
              <div className="flex gap-4">
                <button className="text-green-900 hover:text-white transition-all">
                  <Edit3 size={16} />
                </button>
                <button className="text-green-900 hover:text-red-500 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. MANAGEMENT CONTACT
function ContactManager() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 animate-in zoom-in duration-500">
      {/* Inbox */}
      <div className="space-y-6">
        <h3 className="text-white font-bold text-xs uppercase italic tracking-widest flex items-center gap-2 border-b border-green-900/50 pb-3">
          <Mail size={16} className="text-green-500" /> Encrypted_Inbox
        </h3>
        <div className="space-y-4">
          {[1, 2].map((msg) => (
            <div key={msg} className="bg-green-500/5 border border-green-900 p-5 relative group hover:border-green-500 transition-all">
              <button className="absolute top-4 right-4 text-red-900 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                <Trash2 size={16} />
              </button>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500 text-[10px] font-bold">USR</div>
                <div>
                  <p className="text-white text-xs font-bold uppercase">Pengirim {msg}</p>
                  <p className="text-green-900 text-[9px] font-mono italic">user_0{msg}@network.com</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed italic border-l-2 border-green-900 pl-4 py-1">"Halo bro Kalyn, bisa bantu buatkan integrasi Discord Webhook untuk project saya?"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration Social & Footer */}
      <div className="space-y-8">
        {/* Social Media */}
        <div className="bg-green-500/5 p-6 border border-green-500/20 space-y-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <h3 className="text-white text-[10px] font-black mb-4 uppercase italic tracking-tighter flex items-center gap-2">
            <Globe size={14} className="text-green-500" /> Social_Media_Matrix
          </h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input type="text" placeholder="Platform Name (e.g. Github)" className="w-1/3 bg-black border border-green-900 p-2 text-[10px] text-white outline-none focus:border-green-500" />
              <input type="text" placeholder="URL Endpoint (Link)" className="flex-1 bg-black border border-green-900 p-2 text-[10px] text-white outline-none focus:border-green-500" />
            </div>
            <button className="text-[9px] bg-green-500/10 border border-green-500 text-green-500 px-4 py-2 font-black tracking-widest hover:bg-green-500 hover:text-black transition-all uppercase">UPLINK_NEW_SOCIAL [+]</button>
          </div>
        </div>

        {/* Footer Config */}
        <div className="bg-green-500/5 p-6 border border-green-500/20 space-y-4">
          <h3 className="text-white text-[10px] font-black uppercase italic tracking-tighter flex items-center gap-2">
            <Settings size={14} className="text-green-500" /> System_Footer_Config
          </h3>
          <div className="space-y-2">
            <label className="text-[9px] text-green-900 font-bold uppercase">Footer_Display_Text</label>
            <input type="text" className="w-full bg-black border border-green-900 p-3 text-[10px] text-white outline-none focus:border-green-500" defaultValue="Fullstack Developer // Informatics Engginering" />
            <button className="w-full border border-green-900 text-green-900 py-2 text-[9px] font-bold hover:border-green-500 hover:text-green-500 transition-all uppercase">Synchronize_Footer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
