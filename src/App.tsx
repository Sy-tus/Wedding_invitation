import React, { useEffect, useRef, useState } from "react";

const CalendarIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6.75 3v3M17.25 3v3M3.75 9.25h16.5M5.5 5h13A1.75 1.75 0 0 1 20.25 6.75v12A1.75 1.75 0 0 1 18.5 20.5h-13a1.75 1.75 0 0 1-1.75-1.75v-12A1.75 1.75 0 0 1 5.5 5Z" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

const PinIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 20.25s-7.5-4.68-7.5-10.5A4.25 4.25 0 0 1 12 6.4a4.25 4.25 0 0 1 7.5 3.35c0 5.82-7.5 10.5-7.5 10.5Z" />
  </svg>
);

const FAMILY_MEMBERS = [
  "श्रीमती सुवर्णा भरत नरसुले (आजी)",
  "श्री मोहन शंकर नरसुले (आजोबा)",
  "श्री व सौ. सुनिता विनायक नरसुले (आजी आजोबा)",
  "श्री व सौ. मंगल शंकर नरसुले (काका काकी)",
  "श्री व सौ. सुप्रिया सुगंध नरसुले (काका काकी)",
  "श्रीमती मंदा रघुनाथ तांबे (आजी)",
  "श्री व सौ. आश्विनी अशोक जाधव (मावशी काका)",
  "श्री व सौ. दिप्ती संतोष तांबे (मामा मामी)",
  "श्री व सौ. माधुरी संजय तांबे (मामा मामी)",
  "कु. प्रणित देवेश नरसुले (भाऊ)",
];

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(node);

    const fallback = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.985]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ToranBanner() {
  return (
    <svg
      className="w-full h-12 text-amber-600"
      viewBox="0 0 360 60"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 6 Q90 42 180 14 Q270 42 360 6"
        stroke="#d97706"
        strokeWidth="2.5"
        strokeDasharray="5 4"
      />
      <path
        d="M0 13 Q90 50 180 22 Q270 50 360 13"
        stroke="#b45309"
        strokeWidth="1.5"
      />
      {[36, 76, 116, 156, 204, 244, 284, 324].map((x, idx) => (
        <g
          key={x}
          className="bell-sway"
          style={{
            transformOrigin: `${x}px ${idx % 2 === 0 ? 22 : 30}px`,
            animationDelay: `${idx * 0.22}s`,
          }}
        >
          <line
            x1={x}
            y1={idx % 2 === 0 ? 22 : 30}
            x2={x}
            y2={idx % 2 === 0 ? 40 : 48}
            stroke="#b45309"
            strokeWidth="1.2"
          />
          <circle
            cx={x}
            cy={idx % 2 === 0 ? 42 : 50}
            r="4"
            fill={idx % 2 === 0 ? "#f59e0b" : "#be123c"}
          />
        </g>
      ))}
    </svg>
  );
}

function MandapBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 260 270"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mandapHalo" cx="50%" cy="46%" r="52%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#fecdd3" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Warm Golden & Rose Halo */}
      <circle cx="130" cy="126" r="102" fill="url(#mandapHalo)" />

      {/* Rotating Sacred Chakra / Lotus Ring */}
      <g className="mandap-ring" style={{ transformOrigin: "130px 126px" }}>
        <circle
          cx="130"
          cy="126"
          r="82"
          stroke="#d97706"
          strokeOpacity="0.34"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <circle
          cx="130"
          cy="126"
          r="68"
          stroke="#be123c"
          strokeOpacity="0.22"
          strokeWidth="1"
        />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (deg) => (
            <circle
              key={deg}
              cx="130"
              cy="44"
              r="2.6"
              fill="#f59e0b"
              fillOpacity="0.7"
              transform={`rotate(${deg} 130 126)`}
            />
          )
        )}
      </g>

      {/* Temple Mandap Arch & Pillars */}
      <path
        d="M36 262 L36 122 Q36 34 130 24 Q224 34 224 122 L224 262"
        stroke="#b45309"
        strokeOpacity="0.38"
        strokeWidth="1.6"
      />
      <path
        d="M46 262 L46 124 Q46 46 130 36 Q214 46 214 124 L214 262"
        stroke="#065f46"
        strokeOpacity="0.24"
        strokeWidth="1.1"
        strokeDasharray="3 3"
      />

      {/* Left & Right Hanging Brass Diyas (Samai / Lamps) */}
      <g
        className="bell-sway"
        style={{ transformOrigin: "54px 66px", animationDelay: "0.2s" }}
      >
        <line
          x1="54"
          y1="66"
          x2="54"
          y2="102"
          stroke="#b45309"
          strokeWidth="1.3"
        />
        <path d="M46 102 Q54 110 62 102 Z" fill="#d97706" />
        <ellipse
          cx="54"
          cy="97"
          rx="2.6"
          ry="4.5"
          fill="#f97316"
          className="flame-flicker"
        />
      </g>

      <g
        className="bell-sway"
        style={{ transformOrigin: "206px 66px", animationDelay: "0.7s" }}
      >
        <line
          x1="206"
          y1="66"
          x2="206"
          y2="102"
          stroke="#b45309"
          strokeWidth="1.3"
        />
        <path d="M198 102 Q206 110 214 102 Z" fill="#d97706" />
        <ellipse
          cx="206"
          cy="97"
          rx="2.6"
          ry="4.5"
          fill="#f97316"
          className="flame-flicker"
        />
      </g>

      {/* Top Kalash / Auspicious Crown Dot */}
      <circle cx="130" cy="20" r="4.5" fill="#f59e0b" fillOpacity="0.8" />
    </svg>
  );
}

function CouplePropsOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Drifting Marigold & Rose Petals */}
      <span
        className="petal-fall absolute top-10 left-8 h-2.5 w-2 rounded-full bg-amber-400/80 rotate-12"
        style={{ animationDelay: "0s" }}
      />
      <span
        className="petal-fall absolute top-14 right-10 h-2 w-2.5 rounded-full bg-rose-400/75 -rotate-12"
        style={{ animationDelay: "1.1s" }}
      />
      <span
        className="petal-fall absolute top-16 left-16 h-2 w-2 rounded-full bg-orange-400/80 rotate-45"
        style={{ animationDelay: "2.2s" }}
      />
      <span
        className="petal-fall absolute top-12 right-16 h-2.5 w-2 rounded-full bg-amber-500/75 -rotate-45"
        style={{ animationDelay: "3.1s" }}
      />

      {/* Twinkling Golden Sparkles */}
      <span
        className="sparkle-twinkle absolute top-24 left-6 text-xs text-amber-500"
        style={{ animationDelay: "0.4s" }}
      >
        ✦
      </span>
      <span
        className="sparkle-twinkle absolute top-28 right-6 text-xs text-rose-500"
        style={{ animationDelay: "1.4s" }}
      >
        ✦
      </span>
      <span
        className="sparkle-twinkle absolute bottom-14 left-9 text-[10px] text-amber-600"
        style={{ animationDelay: "2s" }}
      >
        ✦
      </span>
      <span
        className="sparkle-twinkle absolute bottom-16 right-9 text-[10px] text-amber-600"
        style={{ animationDelay: "0.9s" }}
      >
        ✦
      </span>
    </div>
  );
}

function CoupleStage() {
  const [imgMissing, setImgMissing] = useState(false);

  return (
    <div className="relative mx-auto w-64 rounded-t-full border border-amber-500/45 bg-gradient-to-b from-amber-100/85 via-rose-50/75 to-amber-100/90 pt-3 pb-3 px-3 shadow-inner overflow-hidden">
      <MandapBackdrop />
      <CouplePropsOverlay />

      <div className="relative z-10">
        <ToranBanner />
      </div>

      {!imgMissing ? (
        <img
          src="/marathi-couple.png"
          alt="वधू आणि वर शुभविवाह"
          onError={() => setImgMissing(true)}
          className="relative z-10 mx-auto h-44 w-44 object-contain drop-shadow-[0_10px_16px_rgba(120,53,15,0.24)] float-gentle"
        />
      ) : (
        <div
          role="img"
          aria-label="शुभविवाह चिन्ह"
          className="relative z-10 mx-auto my-2 flex h-40 w-40 flex-col items-center justify-center rounded-t-full border border-amber-500/30 bg-white/75 backdrop-blur-2xs text-center px-3 float-gentle"
        >
          <span className="text-2xl font-bold text-rose-800">॥ श्री ॥</span>
          <span className="mt-1 text-xs font-semibold text-emerald-950">
            गौरी व विशाल
          </span>
          <span className="mt-0.5 text-[11px] text-amber-800">
            मंगल परिणय सोहळा
          </span>
        </div>
      )}

      {/* Bottom Rangoli & Brass Diya Pedestal */}
      <div className="relative z-10 mt-1 flex items-center justify-center gap-2 border-t border-amber-500/35 pt-2">
        <span className="text-[10px] text-amber-700">🪔</span>
        <span className="h-1.5 w-1.5 rounded-full bg-rose-700/75" />
        <span className="h-2 w-2 rotate-45 bg-amber-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-800" />
        <span className="h-2 w-2 rotate-45 bg-amber-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-rose-700/75" />
        <span className="text-[10px] text-amber-700">🪔</span>
      </div>
    </div>
  );
}

export default function App() {
  const [saved, setSaved] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [blessingNote, setBlessingNote] = useState("");

  // Venue Details
  const venueTitle = "Geeta Bhavan (गीता भवन)";
  const venueAddress =
    "Rani Sati Nagar, Sunder Nagar, Malad West, Mumbai, Maharashtra 400064";
  const venueMapUrl = "https://maps.app.goo.gl/pCWek63PZ5pDkCFy6";
  const venueCoords = "19.17480741925127;72.84446987423964";

  const saveDate = () => {
    const calendar = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:20261227T181500",
      "DTEND:20261227T220000",
      "SUMMARY:चि. सौ. का. गौरी व चि. विशाल यांचा शुभविवाह",
      `LOCATION:Geeta Bhavan, ${venueAddress}`,
      `GEO:${venueCoords}`,
      `URL:${venueMapUrl}`,
      `DESCRIPTION:मार्गशीर्ष मासे शके १९४८, तिथी कृष्ण चतुर्थी रविवार दिनांक २७-१२-२०२६ रोजी सायंकाळी ६.१५ मि. शुभमुहूर्त. नकाशा: ${venueMapUrl}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const url = URL.createObjectURL(
      new Blob([calendar], { type: "text/calendar" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "gauri-vishal-27-12-2026.ics";
    link.click();
    URL.revokeObjectURL(url);

    setSaved(true);
    window.setTimeout(() => setSaved(false), 2600);
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/90 via-stone-100 to-rose-950/10 px-3 py-5 text-stone-800 flex flex-col items-center">
      <style>{`
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes nameShimmer {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bellSway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes flameFlicker {
          0%, 100% { opacity: 0.85; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.18); }
        }
        @keyframes petalFall {
          0% { opacity: 0; transform: translateY(-6px) rotate(0deg); }
          25% { opacity: 0.9; }
          100% { opacity: 0; transform: translateY(145px) translateX(10px) rotate(160deg); }
        }
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .card-enter {
          animation: cardEnter 0.6s ease-out both;
        }
        .float-gentle {
          animation: gentleFloat 3.6s ease-in-out infinite;
        }
        .couple-lockup-anim {
          animation: nameShimmer 3s ease-in-out infinite;
        }
        .mandap-ring {
          animation: slowSpin 28s linear infinite;
        }
        .bell-sway {
          animation: bellSway 3.2s ease-in-out infinite;
        }
        .flame-flicker {
          animation: flameFlicker 1.4s ease-in-out infinite;
        }
        .petal-fall {
          animation: petalFall 4.6s ease-in infinite;
        }
        .sparkle-twinkle {
          animation: sparkleTwinkle 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Mobile-First Invitation Card */}
      <article
        aria-labelledby="couple-title"
        className="card-enter relative w-full max-w-md rounded-3xl bg-[#FCF9F2] border border-amber-500/40 shadow-[0_18px_45px_-15px_rgba(28,25,23,0.2)] overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-2 rounded-[20px] border border-rose-800/15" />

        <div className="relative z-10 px-4 pt-5 pb-6 text-center">
          {/* Top Invocations */}
          <ScrollReveal>
            <p className="text-sm font-bold text-rose-800 tracking-wide">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <div className="mt-1.5 space-y-0.5 text-[11px] font-medium text-emerald-950/90 leading-snug">
              <p>॥ श्री स्वामी समर्थ ॥</p>
              <p>॥ श्री देवी नवदुर्गा प्रसन्न ॥ &nbsp; ॥ श्री रामेश्वर प्रसन्न ॥</p>
            </div>

            <p className="mt-3 text-left text-xs font-semibold text-stone-700">
              सप्रेम नमस्कार वि. वि.
            </p>
          </ScrollReveal>

          {/* Unified Bride + Wedding + Groom Section */}
          <ScrollReveal delay={90}>
            <div className="mt-2.5 rounded-2xl bg-white/80 border border-amber-500/25 px-3.5 py-4 space-y-1.5">
              <p className="text-xs text-stone-600">आमच्या येथे श्रींच्या कृपेने</p>
              <p className="text-xs font-medium text-stone-700 leading-relaxed">
                कै. भरत शंकर नरसुले यांची नात
              </p>
              <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                श्री व सौ. स्वप्ना देवेश नरसुले
              </p>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                ता. वेंगुर्ले सिद्धेश्वरवाडी जि. सिंधुदुर्ग यांची जेष्ठ सुकन्या
              </p>

              {/* Couple Names Lockup */}
              <div
                id="couple-title"
                className="couple-lockup-anim py-2 flex flex-col items-center justify-center gap-1 text-base sm:text-lg font-bold text-rose-800 leading-normal"
              >
                <span>चि. सौ. का. गौरी</span>
                <span className="text-xs font-bold text-emerald-900">
                  卐 ह्यांचा शुभविवाह 卐
                </span>
                <span>चि. विशाल</span>
              </div>

              <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                श्री सुनिल रामचंद्र देवरुखकर
              </p>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                मु. पो. पंथरागाव साखर ता. चिपळूण, जि. रत्नागिरी यांचा द्वितीय सुपुत्र
              </p>
            </div>
          </ScrollReveal>

          {/* Separate Photo Card */}
          <ScrollReveal delay={120} className="my-3.5">
            <div className="rounded-2xl bg-gradient-to-b from-amber-50/90 via-white/90 to-rose-50/70 border border-amber-500/40 px-3 py-3.5 shadow-2xs">
              <CoupleStage />
            </div>
          </ScrollReveal>

          {/* Muhurta & Date Card */}
          <ScrollReveal delay={130}>
            <section
              aria-label="विवाह मुहूर्त"
              className="mt-4 rounded-2xl bg-gradient-to-b from-amber-100/70 to-amber-50/80 border border-amber-500/40 px-3.5 py-3.5"
            >
              <p className="text-xs font-medium text-stone-700">
                मार्गशीर्ष मासे शके १९४८, तिथी कृष्ण चतुर्थी
              </p>

              <div className="mt-2.5 inline-flex items-center justify-center gap-3 rounded-xl bg-white/90 border border-amber-500/30 px-4 py-2 shadow-2xs">
                <span className="text-xs font-semibold text-emerald-950 border-r border-amber-500/30 pr-3">
                  रविवार
                </span>
                <strong className="text-2xl font-extrabold text-rose-800 leading-none">
                  २७-१२-२०२६
                </strong>
              </div>

              <p className="mt-2.5 text-xs sm:text-sm font-bold text-rose-900">
                सायंकाळी ६.१५ मि. या मुहूर्तावर विवाह करण्याचे योजिले आहे.
              </p>
            </section>
          </ScrollReveal>

          {/* Venue Details Card */}
          <ScrollReveal delay={135}>
            <section
              aria-label="विवाह स्थळ"
              className="mt-3.5 rounded-2xl bg-white/85 border border-amber-500/30 px-3.5 py-3 space-y-1"
            >
              <p className="text-[11px] font-bold tracking-wide text-emerald-900">
                ॥ विवाह स्थळ ॥
              </p>
              <p className="text-sm font-bold text-rose-800">{venueTitle}</p>
              <p className="text-xs text-stone-700 leading-relaxed">
                {venueAddress}
              </p>
            </section>
          </ScrollReveal>

          {/* Invitation Appeal & Actions */}
          <ScrollReveal delay={140}>
            <p className="mt-3.5 text-xs text-stone-700 leading-relaxed px-1">
              कार्य सिद्धिस नेण्यास श्री समर्थ आहेत तरी ह्या शुभप्रसंगी आपण
              सहकुटुंब, सहपरिवार व मित्रमंडळींसह उपस्थित राहून वधुवरांस
              शुभाशीर्वाद द्यावेत ही नम्र विनंती
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2.5">
              <button
                type="button"
                onClick={saveDate}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-900 text-amber-50 text-xs font-semibold shadow-xs active:scale-[0.99] transition cursor-pointer"
              >
                <CalendarIcon />
                {saved ? "दिनांक जतन झाला ✓" : "कॅलेंडरमध्ये दिनांक जतन करा"}
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={venueMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white text-stone-800 border border-amber-500/35 text-xs font-semibold active:scale-[0.99] transition"
                >
                  <PinIcon />
                  स्थळ पहा
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setRsvpSubmitted(false);
                    setRsvpOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rose-800 text-white text-xs font-semibold shadow-xs active:scale-[0.99] transition cursor-pointer"
                >
                  <HeartIcon />
                  उपस्थिती कळवा
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Hosts Section */}
          <ScrollReveal delay={160}>
            <div className="mt-5 pt-4 border-t border-amber-500/30">
              <p className="text-xs font-bold text-rose-800">
                ✽ आपले स्नेहांकीत ✽
              </p>
              <p className="mt-1.5 text-xs font-semibold text-emerald-950 leading-relaxed">
                श्री देवेश भरत नरसुले &nbsp;|&nbsp; सौ. स्वप्ना देवेश नरसुले
              </p>
              {/* <p className="mt-1.5 text-[11px] font-medium text-stone-700">
                वरिल विनंतीस मान देऊन अगत्य येण्याची कृपा करावी
              </p> */}

              {/* <button
                type="button"
                onClick={() => setShowFamily((prev) => !prev)}
                className="mt-3 w-full py-2 px-3 rounded-xl border border-amber-500/35 bg-amber-50/70 text-xs font-semibold text-emerald-950 active:scale-[0.99] transition cursor-pointer"
              >
                {showFamily ? "परिवार यादी लपवा ▲" : "संपूर्ण परिवार यादी पहा ▼"}
              </button>

              {showFamily && (
                <ul className="mt-2.5 space-y-1.5 rounded-2xl bg-white/80 border border-amber-500/25 p-3 text-left text-[11px] text-stone-700">
                  {FAMILY_MEMBERS.map((member) => (
                    <li
                      key={member}
                      className="pb-1 last:pb-0 border-b last:border-b-0 border-stone-200/70"
                    >
                      {member}
                    </li>
                  ))}
                </ul>
              )} */}

              <div className="mt-4 py-2 px-3 rounded-full bg-rose-900 text-amber-50 text-xs font-bold tracking-wide shadow-xs">
                समस्त नरसुले परिवार
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* RSVP Modal */}
      {rsvpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="rsvp-heading"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/60 backdrop-blur-2xs p-3"
        >
          <div className="card-enter w-full max-w-md rounded-2xl bg-[#FCF9F2] border border-amber-500/40 p-5 shadow-2xl">
            <h2
              id="rsvp-heading"
              className="text-lg font-bold text-emerald-950 text-center"
            >
              उपस्थिती व शुभेच्छा
            </h2>
            <p className="mt-0.5 text-xs text-center text-stone-600">
              चि. सौ. का. गौरी व चि. विशाल · २७-१२-२०२६
            </p>

            {!rsvpSubmitted ? (
              <form onSubmit={handleRsvpSubmit} className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    आपले नाव
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="उदा. श्री. व सौ. देशमुख"
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-emerald-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    पाहुण्यांची संख्या
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-emerald-700 focus:outline-none"
                  >
                    <option value="1">१ व्यक्ती</option>
                    <option value="2">२ व्यक्ती</option>
                    <option value="3">३ व्यक्ती</option>
                    <option value="4+">४ किंवा अधिक</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    शुभेच्छा संदेश (ऐच्छिक)
                  </label>
                  <textarea
                    rows={2}
                    value={blessingNote}
                    onChange={(e) => setBlessingNote(e.target.value)}
                    placeholder="वधू-वरांसाठी शुभेच्छा..."
                    className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-emerald-700 focus:outline-none"
                  />
                </div>

                <div className="pt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setRsvpOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 cursor-pointer"
                  >
                    बंद करा
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-emerald-900 text-amber-50 text-xs font-semibold cursor-pointer"
                  >
                    नोंद पाठवा
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-4 text-center space-y-2.5">
                <p className="text-sm text-stone-800">
                  धन्यवाद, <strong>{guestName}</strong>! ({guestCount} व्यक्ती)
                </p>
                {blessingNote && (
                  <p className="rounded-xl bg-amber-50 border border-amber-400/30 p-2.5 text-xs italic text-stone-700">
                    “{blessingNote}”
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setRsvpOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-emerald-900 text-amber-50 text-xs font-semibold cursor-pointer"
                >
                  ठीक आहे
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}