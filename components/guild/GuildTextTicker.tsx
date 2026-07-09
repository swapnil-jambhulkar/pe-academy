type GuildTextTickerProps = {
  items: readonly string[];
  label: string;
  labelId: string;
  className?: string;
};

export default function GuildTextTicker({ items, label, labelId, className }: GuildTextTickerProps) {
  const tickerItems = [...items, ...items];

  return (
    <div className={className} aria-labelledby={labelId}>
      <p
        id={labelId}
        className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4 text-center"
      >
        {label}
      </p>

      <div className="relative overflow-hidden border-t border-gray-200 bg-gray-50 py-4 md:py-5">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-gray-50 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-gray-50 to-transparent"
          aria-hidden
        />

        <div className="campus-ticker">
          <div className="campus-ticker-track campus-ticker-track--text">
            {tickerItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="campus-ticker-item inline-flex items-center gap-4 px-2 text-sm md:text-base font-medium text-gray-800 whitespace-nowrap"
              >
                {item}
                <span className="text-gray-300" aria-hidden>
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
