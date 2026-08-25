const PHRASE = "Conforto  •  Sofisticação  •  Elegância  •  Qualidade  •  ";

export function GoldRibbon() {
  // Repeat the phrase so the looping marquee never shows a gap
  const track = PHRASE.repeat(6);

  return (
    <div
      className="relative w-full overflow-hidden py-2 shadow-md"
      style={{
        background:
          "linear-gradient(90deg, #7a5a13 0%, #d4af37 20%, #f9e29c 40%, #d4af37 60%, #a67c1e 80%, #d4af37 100%)",
      }}
      aria-hidden="false"
    >
      <div className="flex w-max animate-gold-marquee">
        <span className="whitespace-nowrap px-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#3a2a05] drop-shadow-sm">
          {track}
        </span>
        <span className="whitespace-nowrap px-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#3a2a05] drop-shadow-sm">
          {track}
        </span>
      </div>
    </div>
  );
}
