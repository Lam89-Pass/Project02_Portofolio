import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, RefreshCw, Home } from "lucide-react";

const ErrorPage = ({ errorCode = "404", errorMsg = "ACCESS_DENIED" }) => {
  return (
    <div className="bg-black text-green-500 min-h-screen font-mono flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effect - Scanlines & Matrix */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="shine-card glow-border border border-red-500/50 bg-red-500/5 p-10 max-w-lg w-full text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-500/20 border border-red-500 animate-pulse">
            <ShieldAlert size={48} className="text-red-500" />
          </div>
        </div>

        <h1 className="text-8xl font-black text-red-600 tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">{errorCode}</h1>

        <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-6">
          &gt; {errorMsg} <span className="animate-typing">_</span>
        </h2>

        <div className="bg-black/50 border border-red-500/20 p-4 text-[11px] text-left mb-8 space-y-1">
          <p className="text-red-900 font-bold tracking-tighter uppercase">[SYSTEM_STATUS: COMPROMISED]</p>
          <p className="text-gray-500 uppercase">Protokol keamanan mendeteksi intrusi pada jalur navigasi.</p>
          <p className="text-gray-500 uppercase">Lokasi yang Anda tuju tidak ditemukan atau server mengalami kegagalan enkripsi.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex-1 bg-red-600 text-white py-3 px-6 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-red-600 transition-all flex items-center justify-center gap-2"
          >
            <Home size={14} /> Back_to_Secure_Zone
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex-1 border border-red-600 text-red-600 py-3 px-6 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw size={14} /> Retry_Handshake
          </button>
        </div>
      </motion.div>

      {/* Terminal Footer Deco */}
      <div className="absolute bottom-4 left-6 text-[10px] text-red-900/50 uppercase flex items-center gap-2">
        <Terminal size={12} /> Trace_ID: {Math.random().toString(16).substring(2, 10).toUpperCase()}
      </div>
    </div>
  );
};

export default ErrorPage;
