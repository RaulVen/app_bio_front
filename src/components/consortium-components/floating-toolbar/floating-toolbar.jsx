import React from "react";

export default function FloatingToolbar({ className = "" }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-md px-4 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.22)] border border-black/5">
        {/* + */}
        <button
          type="button"
          className="h-11 w-11 rounded-xl bg-white/90 shadow-sm flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="rgba(0,0,0,0.72)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* menu */}
        <button
          type="button"
          className="h-11 w-11 rounded-xl bg-white/90 shadow-sm flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 7h12M6 12h12M6 17h12"
              stroke="rgba(0,0,0,0.72)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* back */}
        <button
          type="button"
          className="h-11 w-11 rounded-xl bg-white/90 shadow-sm flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.5 5L7.5 12L14.5 19"
              stroke="rgba(0,0,0,0.72)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
