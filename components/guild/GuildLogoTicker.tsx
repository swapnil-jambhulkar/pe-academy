import Image from "next/image";

export type GuildLogoTickerItem = {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
};

type GuildLogoTickerProps = {
  items: readonly GuildLogoTickerItem[];
  label: string;
  labelId: string;
  className?: string;
  surface?: "gray" | "white";
};

export default function GuildLogoTicker({
  items,
  label,
  labelId,
  className,
  surface = "gray",
}: GuildLogoTickerProps) {
  const tickerItems = [...items, ...items];
  const isGray = surface === "gray";

  return (
    <div className={className} aria-labelledby={labelId}>
      <p
        id={labelId}
        className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4 text-center"
      >
        {label}
      </p>

      <div
        className={
          isGray
            ? "relative overflow-hidden border-y border-gray-200 bg-gray-50 py-5 md:py-6"
            : "relative overflow-hidden border-t border-gray-200 bg-white py-5 md:py-6"
        }
      >
        <div
          className={
            isGray
              ? "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-gray-50 to-transparent"
              : "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-white to-transparent"
          }
          aria-hidden
        />
        <div
          className={
            isGray
              ? "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-gray-50 to-transparent"
              : "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-white to-transparent"
          }
          aria-hidden
        />

        <div className="campus-ticker">
          <div className="campus-ticker-track">
            {tickerItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="campus-ticker-item px-3">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={220}
                  height={48}
                  className="h-8 md:h-10 w-auto max-w-[200px] object-contain"
                  unoptimized={item.logo.endsWith(".svg")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
