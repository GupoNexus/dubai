const PHRASE = "Conforto  •  Sofisticação  •  Elegância  •  Qualidade  •  ";

export function GoldRibbon() {
  // Repeat the phrase so the looping marquee never shows a gap
  const track = PHRASE.repeat(6);

  return (
    <div
      className="relative w-full overflow-hidden py-2 shadow-sm border-b border-[#e4d4b8]"
      style={{
        background:
          "linear-gradient(90deg, #efe2c6 0%, #f7ecd6 25%, #fbf4e4 50%, #f7ecd6 75%, #efe2c6 100%)",
      }}
      aria-hidden="false"
    >
      <div className="flex w-max animate-gold-marquee">
        <span className="whitespace-nowrap px-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary/80">
          {track}
        </span>
        <span className="whitespace-nowrap px-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary/80">
          {track}
        </span>
      </div>
    </div>
  );
}
