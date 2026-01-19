import React from "react";

/**
 * CalendarBadge con toolbar flotante arriba.
 *
 * Props:
 * - month: "October"
 * - day: "10"
 * - toolbar: ReactNode (ej: <FloatingToolbar ... />)
 *
 * Uso:
 * <CalendarBadge month="October" day="10" toolbar={<FloatingToolbar ... />} />
 */
export default function CalendarBadge({ month = "October", day = "10", toolbar = null }) {
  return (
    <div className="relative w-[220px] flex justify-end select-none">
      {/* Toolbar arriba del calendario */}
      {toolbar ? (
        <div className="absolute -top-2 right-0">
          {toolbar}
        </div>
      ) : null}

      {/* Calendario */}
      <div className="mt-16">
        <div className="w-[120px] rounded-2xl overflow-hidden bg-white shadow-[0_22px_45px_rgba(0,0,0,0.28)] border border-black/10">
          {/* Header azul */}
          <div className="bg-[#2f67ff] text-white font-extrabold text-center py-2 text-[18px] leading-none">
            {month}
          </div>

          {/* Body */}
          <div className="bg-[#efefef] text-center py-3">
            <div className="text-[#18224a] font-extrabold text-[60px] leading-[1] drop-shadow-[0_3px_0_rgba(0,0,0,0.18)]">
              {day}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
