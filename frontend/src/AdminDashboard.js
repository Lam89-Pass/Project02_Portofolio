import React, { useState } from "react";
import { LayoutDashboard, FolderPlus, Settings, LogOut, Edit3, Trash2, Save } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-green-500/30 p-6 flex flex-col gap-8">
        <div className="text-xl font-black tracking-tighter italic border-b border-green-500/30 pb-4">ADMIN_PANEL_V1</div>
        <nav className="flex flex-col gap-4">
          <button onClick={() => setActiveTab("projects")} className={`flex items-center gap-3 p-2 transition-all ${activeTab === "projects" ? "bg-green-500 text-black" : "hover:bg-green-500/10"}`}>
            <FolderPlus size={18} /> PROJECTS_DB
          </button>
          <button onClick={() => setActiveTab("profile")} className={`flex items-center gap-3 p-2 transition-all ${activeTab === "profile" ? "bg-green-500 text-black" : "hover:bg-green-500/10"}`}>
            <Settings size={18} /> SYSTEM_CONFIG
          </button>
        </nav>
        <div className="mt-auto">
          <button className="flex items-center gap-3 p-2 text-red-900 hover:text-red-500 transition-all text-xs">
            <LogOut size={16} /> TERMINATE_SESSION
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black italic uppercase">Control_Center</h1>
            <p className="text-[10px] text-green-900 tracking-widest">/root/dashboard/{activeTab}</p>
          </div>
          <div className="text-[10px] text-right">
            STATUS: <span className="text-white animate-pulse">ADMIN_AUTHENTICATED</span>
            <br />
            SESSION_ID: 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}
          </div>
        </header>

        {activeTab === "projects" ? <ProjectManager /> : <ProfileManager />}
      </main>
    </div>
  );
}

// Komponen Pengelola Proyek
function ProjectManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-green-500/5 p-4 border border-green-500/20">
        <span className="text-sm font-bold tracking-tighter text-white uppercase italic">Active_Data_Archives</span>
        <button className="bg-green-500 text-black px-4 py-1 text-[10px] font-bold hover:bg-white transition-all flex items-center gap-2">ADD_NEW_ENTRY [+]</button>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-green-900 p-4 flex justify-between items-center group hover:border-green-500 transition-all">
            <div>
              <div className="text-xs text-green-900 font-bold mb-1 italic">#DATA_STREAM_00{i}</div>
              <div className="text-white font-bold uppercase tracking-tighter">Project_Title_Placeholder</div>
              <div className="text-[10px] text-gray-500 mt-1">Tech: React, Tailwind, API</div>
            </div>
            <div className="flex gap-4">
              <button className="text-green-900 hover:text-white transition-all">
                <Edit3 size={18} />
              </button>
              <button className="text-green-900 hover:text-red-500 transition-all">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Komponen Pengelola Profil/Landing Page
function ProfileManager() {
  return (
    <div className="max-w-2xl bg-green-500/5 border border-green-500/20 p-8 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-[10px] text-green-900 block mb-2 font-bold italic tracking-widest">SYSTEM_DISPLAY_NAME</label>
          <input type="text" defaultValue="GHALYN" className="w-full bg-black border border-green-900 p-3 text-sm text-white outline-none focus:border-green-500" />
        </div>
        <div>
          <label className="text-[10px] text-green-900 block mb-2 font-bold italic tracking-widest">CORE_BIO_DESCRIPTION</label>
          <textarea rows="4" className="w-full bg-black border border-green-900 p-3 text-sm text-white outline-none focus:border-green-500 resize-none" defaultValue="Mahasiswa Teknik Informatika UNPAS..." />
        </div>
      </div>
      <button className="w-full bg-green-500/10 border border-green-500 text-green-500 py-3 font-bold text-xs hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-2">
        <Save size={14} /> UPDATE_CORE_DATA
      </button>
    </div>
  );
}
