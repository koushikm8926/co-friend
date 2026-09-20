"use client";

const DOCK_ITEMS = [
  { id: "movies", label: "Movies", left: "55.0%", width: "5.5%" },
  { id: "coffee", label: "Coffee", left: "60.5%", width: "5.5%" },
  { id: "shopping", label: "Shopping", left: "65.9%", width: "5.5%" },
  { id: "travel", label: "Travel", left: "71.4%", width: "5.5%" },
  { id: "fitness", label: "Fitness", left: "76.8%", width: "5.5%" },
  { id: "events", label: "Events", left: "82.2%", width: "5.5%" },
  { id: "more", label: "More", left: "87.7%", width: "5.5%" },
];

export default function Hero({
  onFind,
  onBecome,
  onOpenComingSoon,
}: {
  onFind: () => void;
  onBecome: () => void;
  onOpenComingSoon?: (feature: string) => void;
}) {
  return (
    <section id="home" className="relative w-full bg-white pt-2 pb-6 sm:pt-4 sm:pb-10">
      {/* Screen Reader & SEO semantics */}
      <div className="sr-only">
        <h1>Find a CoFriend. Share the Moment.</h1>
        <p>
          Life feels better with the right company. Find verified CoFriends for coffee, movies,
          shopping, travel, fitness, events, study sessions and everyday experiences. Choose who
          you&apos;d like to spend time with, select a service and book a time that works for you.
        </p>
      </div>

      <div className="mx-auto max-w-[1400px] px-2 sm:px-4 lg:px-6">
        {/* Exact Hero Visual with Pixel-Perfect Precision & Interactive Hotspots */}
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xs">
          {/* 2x Ultra-Crisp Retina Hero Banner */}
          <img
            src="/images/hero-exact@2x.png"
            alt="Find a CoFriend. Share the Moment - Verified companions for coffee, movies, shopping, and experiences."
            className="w-full h-auto object-contain block select-none"
          />

          {/* Interactive Overlay Targets */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* 1. Find a CoFriend Button Hotspot */}
            <button
              onClick={onFind}
              className="absolute pointer-events-auto rounded-full hover:ring-4 hover:ring-purple-400/40 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              style={{
                left: "3.7%",
                top: "66.5%",
                width: "20.2%",
                height: "13.2%",
              }}
              title="Find a CoFriend"
              aria-label="Find a CoFriend"
            />

            {/* 2. Become a CoFriend Button Hotspot */}
            <button
              onClick={onBecome}
              className="absolute pointer-events-auto rounded-full hover:ring-4 hover:ring-purple-400/40 hover:bg-purple-500/10 active:scale-95 transition-all cursor-pointer"
              style={{
                left: "24.6%",
                top: "66.5%",
                width: "21.6%",
                height: "13.2%",
              }}
              title="Become a CoFriend"
              aria-label="Become a CoFriend"
            />

            {/* 3. Quick Services Dock Interactive Hotspots */}
            {DOCK_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onOpenComingSoon?.(`${item.label} service booking`)}
                className="absolute pointer-events-auto rounded-xl hover:bg-black/5 hover:ring-2 hover:ring-pink-400/40 active:scale-95 transition-all cursor-pointer"
                style={{
                  left: item.left,
                  top: "78.0%",
                  width: item.width,
                  height: "17.0%",
                }}
                title={`${item.label} - Coming Soon`}
                aria-label={`${item.label} service booking`}
              />
            ))}
          </div>
        </div>

        {/* Mobile-Friendly Quick Actions (visible on small mobile screens for accessibility) */}
        <div className="mt-4 flex sm:hidden flex-col gap-2.5 px-2">
          <div className="flex gap-2">
            <button
              onClick={onFind}
              className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-xs font-bold text-white shadow-md text-center"
            >
              🔍 Find a CoFriend ➔
            </button>
            <button
              onClick={onBecome}
              className="flex-1 rounded-full border-2 border-purple-600 bg-white py-3 text-xs font-bold text-purple-700 shadow-sm text-center"
            >
              👤 Become a CoFriend ➔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
