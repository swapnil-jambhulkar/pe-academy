import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero video options (internal)",
  robots: { index: false, follow: false },
};

const options = [
  {
    id: "A",
    file: "a-standing-defense",
    title: "Standing defense to seated members",
    note: "Presenter at flipchart; two seated listeners. Closest to IC defense.",
  },
  {
    id: "B",
    file: "b-suit-whiteboard",
    title: "Suit presenter at whiteboard",
    note: "Man in suit defending agenda points at the board.",
  },
  {
    id: "C",
    file: "c-suit-meeting",
    title: "Committee listening (audience POV)",
    note: "Senior table listening to an off-camera presenter; charts on table.",
  },
  {
    id: "D",
    file: "d-suit-pitch",
    title: "Standing pitch with market screen",
    note: "Presenter between financial monitor and whiteboard.",
  },
  {
    id: "F",
    file: "f-formal-boardroom",
    title: "Formal dark-wood boardroom",
    note: "Leather chairs, long table, document review. Setup, not standing defense.",
  },
  {
    id: "G",
    file: "g-committee-charts",
    title: "Committee with charts and calculator",
    note: "Senior professionals reviewing financial papers. Strong PE signal.",
  },
  {
    id: "H",
    file: "h-head-of-table",
    title: "Presenter at head of table",
    note: "Standing at the head; seated audience in foreground.",
  },
] as const;

export default function VideoOptionsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">Internal preview</p>
        <h1 className="font-heading text-3xl sm:text-4xl mb-3">Hero video options</h1>
        <p className="text-sm text-gray-700 max-w-3xl mb-2 leading-relaxed">
          All clips are royalty-free stock (Pexels or Coverr commercial licence). None are proprietary PE-firm
          internal footage. Reply with a letter (A, B, C, D, F, G, or H) to set the homepage hero.
        </p>
        <p className="text-sm text-gray-500 mb-10">Skip E (blurred conference). It is too soft for the site.</p>

        <div className="grid gap-10">
          {options.map((opt) => (
            <section key={opt.id} className="border border-gray-200">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gray-200 px-4 py-3">
                <h2 className="text-lg font-semibold">
                  Option {opt.id}: {opt.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.14em] text-gray-500">Reply &quot;{opt.id}&quot;</p>
              </div>
              <div className="bg-black">
                <video
                  className="aspect-video w-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={`/videos/options/${opt.file}.jpg`}
                >
                  <source src={`/videos/options/${opt.file}.mp4`} type="video/mp4" />
                </video>
              </div>
              <p className="px-4 py-3 text-sm text-gray-700">{opt.note}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
