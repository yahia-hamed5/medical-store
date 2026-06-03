export const categories = [
  { id: "all", label: "الكل", icon: "⊞" },
  { id: "diagnostic", label: "أجهزة التشخيص", icon: "🩺" },
  { id: "monitoring", label: "المراقبة", icon: "📊" },
  { id: "surgical", label: "الجراحة", icon: "🔬" },
  { id: "rehabilitation", label: "التأهيل", icon: "♿" },
  { id: "protection", label: "الوقاية", icon: "🛡️" },
];

// export const products = [
//   {
//     id: 1,
//     name: 'شفاط أنف كهربائي',
//     category: 'monitoring',
//     price: 1800,
//     oldPrice: 2000,
//     rating: 4.8,
//     reviews: 312,
//     badge: 'الأكثر مبيعاً',
//     badgeColor: '#0ea5b5',
//     description: 'جهاز ذكي للمعصم مع قراءة فورية ودقيقة وذاكرة تخزين 90 قراءة',
//     emoji: '🩺',
//     color: '#e0f7ff',
//     accentColor: '#0ea5b5',
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: 'فوتة حرارية ميدسانا',
//     category: 'diagnostic',
//     price: 2200,
//     oldPrice: null,
//     rating: 4.9,
//     reviews: 187,
//     badge: 'جديد',
//     badgeColor: '#c9a84c',
//     description: 'فوتة حرارية ميدسانا احترافية بإضاءة LED قوية وعدسة مكبرة 3× للفحص الدقيق',
//     emoji: '🔦',
//     color: '#fff8e7',
//     accentColor: '#c9a84c',
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: 'جهاز بدال رياضي',
//     category: 'monitoring',
//     price: 220,
//     oldPrice: 310,
//     rating: 4.7,
//     reviews: 524,
//     badge: 'خصم 29%',
//     badgeColor: '#ef4444',
//     description: 'مقياس نبض الأكسجين بشاشة OLED ملونة ونتائج فورية خلال ثانيتين',
//     emoji: '❤️',
//     color: '#fff0f0',
//     accentColor: '#ef4444',
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: 'سماعة طبية احترافية',
//     category: 'diagnostic',
//     price: 1250,
//     oldPrice: 1500,
//     rating: 5.0,
//     reviews: 98,
//     badge: 'Premium',
//     badgeColor: '#7c3aed',
//     description: 'سماعة ثنائية الرأس من الفولاذ المقاوم للصدأ مع غشاء حساس فائق الجودة',
//     emoji: '🎧',
//     color: '#f5f0ff',
//     accentColor: '#7c3aed',
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: 'ميزان طبي رقمي BMI',
//     category: 'monitoring',
//     price: 380,
//     oldPrice: null,
//     rating: 4.6,
//     reviews: 245,
//     badge: null,
//     badgeColor: null,
//     description: 'ميزان ذكي يقيس الوزن وكتلة الجسم والدهون والماء بدقة عالية',
//     emoji: '⚖️',
//     color: '#e8f8f5',
//     accentColor: '#10b981',
//     inStock: true,
//   },
//   {
//     id: 6,
//     name: 'جبيرة معصم قابلة للضبط',
//     category: 'rehabilitation',
//     price: 175,
//     oldPrice: 220,
//     rating: 4.5,
//     reviews: 163,
//     badge: null,
//     badgeColor: null,
//     description: 'جبيرة طبية مريحة مصنوعة من نيوبرين عالي الجودة مع إغلاق فيلكرو',
//     emoji: '🦾',
//     color: '#e0f2fe',
//     accentColor: '#0284c7',
//     inStock: false,
//   },
//   {
//     id: 7,
//     name: 'قفازات طبية لاتكس (100 قطعة)',
//     category: 'protection',
//     price: 95,
//     oldPrice: null,
//     rating: 4.4,
//     reviews: 891,
//     badge: null,
//     badgeColor: null,
//     description: 'قفازات معقمة خالية من البودرة مناسبة للفحص الطبي والتضميد',
//     emoji: '🧤',
//     color: '#f0fdf4',
//     accentColor: '#16a34a',
//     inStock: true,
//   },
//   {
//     id: 8,
//     name: 'مشرط جراحي متعدد الأحجام',
//     category: 'surgical',
//     price: 340,
//     oldPrice: 400,
//     rating: 4.8,
//     reviews: 72,
//     badge: 'خصم 15%',
//     badgeColor: '#ef4444',
//     description: 'طقم مشارط جراحية ستانلس ستيل معقمة ومعبأة بشكل فردي (10 قطع)',
//     emoji: '🔪',
//     color: '#f8f4ff',
//     accentColor: '#9333ea',
//     inStock: true,
//   },
// ];

export const products = [
  {
    id: 1,
    name: "شفاط أنف كهربائي",

    category: "monitoring",

    price: 1800,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/hood/hood-5.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/hood/hood-7.jpeg",
      },
    ],

    oldPrice: 2000,
    rating: 4.8,
    reviews: 156,
    badge: "الأكثر مبيعاً",
    badgeColor: "#0ea5b5",
    description: "شفاط أنف كهربائي للأطفال صناعة صينية.",
    emoji: "👶",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 2,
    name: "فوطة حرارية ميدسانا",
    category: "rehabilitation",
    price: 2200,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/towel/towel-1.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.9,
    reviews: 94,
    badge: "ضمان 3 سنوات",
    badgeColor: "#c9a84c",
    description: "فوطة حرارية ألمانية من ميدسانا.",
    emoji: "🔥",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 3,
    name: "بدال رياضي",

    category: "rehabilitation",

    price: 1500,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/Instead/Instead-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/Instead/Instead-1.jpeg",
      },
    ],

    oldPrice: 1800,
    rating: 4.7,
    reviews: 211,
    badge: "خصم",
    badgeColor: "#ef4444",
    description: "بدال رياضي صيني للتأهيل والحركة.",
    emoji: "🚴",
    color: "#fff0f0",
    accentColor: "#ef4444",
    inStock: true,
  },
  {
    id: 4,
    name: "مجموعة أعصاب",

    category: "diagnostic",

    price: 950,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/handle/handle-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/handle/handle-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/handle/handle-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/handle/handle-4.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.6,
    reviews: 73,
    badge: "جديد",
    badgeColor: "#7c3aed",
    description: "مجموعة فحص أعصاب للاستخدام الطبي.",
    emoji: "🧠",
    color: "#f5f0ff",
    accentColor: "#7c3aed",
    inStock: true,
  },
  {
    id: 5,
    name: "شفاط مخاط يدوي للأطفال",

    category: "monitoring",

    price: 350,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/hood/hood-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/hood/hood-4.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.5,
    reviews: 128,
    badge: null,
    badgeColor: null,
    description: "شفاط مخاط يدوي آمن للأطفال.",
    emoji: "👶",
    color: "#e8f8f5",
    accentColor: "#10b981",
    inStock: true,
  },
  {
    id: 6,
    name: "شفاط حليب يدوي",

    category: "monitoring",

    price: 700,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/hood/hood-2.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.4,
    reviews: 86,
    badge: null,
    badgeColor: null,
    description: "شفاط حليب يدوي للأمهات.",
    emoji: "🍼",
    color: "#e0f2fe",
    accentColor: "#0284c7",
    inStock: true,
  },
  {
    id: 7,
    name: "شفاط حليب كهربائي",

    category: "monitoring",

    price: 4500,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/hood/hood-1.jpeg",
      },
    ],

    oldPrice: 5000,
    rating: 4.9,
    reviews: 67,
    badge: "Premium",
    badgeColor: "#16a34a",
    description: "شفاط حليب كهربائي متعدد المستويات.",
    emoji: "⚡",
    color: "#f0fdf4",
    accentColor: "#16a34a",
    inStock: true,
  },
  {
    id: 8,
    name: "كرسي متحرك",

    category: "rehabilitation",

    price: 4000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-3.jpeg",
      },
    ],

    oldPrice: 4500,
    rating: 4.8,
    reviews: 142,
    badge: "مستورد",
    badgeColor: "#9333ea",
    description: "كرسي متحرك مستورد عالي الجودة.",
    emoji: "♿",
    color: "#f8f4ff",
    accentColor: "#9333ea",
    inStock: true,
  },
  {
    id: 9,
    name: "كرسي حمام عجل صغير",

    category: "rehabilitation",

    price: 3500,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-4.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-7.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.6,
    reviews: 55,
    badge: null,
    badgeColor: null,
    description: "كرسي حمام بعجلات صغير الحجم.",
    emoji: "♿",
    color: "#e0f2fe",
    accentColor: "#0284c7",
    inStock: true,
  },
  {
    id: 10,
    name: "كرسي حمام عجل كبير",

    category: "rehabilitation",

    price: 6000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-5.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-6.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.7,
    reviews: 39,
    badge: "مستورد",
    badgeColor: "#0284c7",
    description: "كرسي حمام بعجلات كبير الحجم.",
    emoji: "♿",
    color: "#e0f2fe",
    accentColor: "#0284c7",
    inStock: true,
  },
  {
    id: 11,
    name: "كرسي كهربائي",

    category: "rehabilitation",

    price: 22000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/chair/chair-1.jpeg",
      },
    ],

    oldPrice: 25000,
    rating: 5.0,
    reviews: 22,
    badge: "Premium",
    badgeColor: "#7c3aed",
    description: "كرسي متحرك كهربائي مستورد.",
    emoji: "⚡",
    color: "#f5f0ff",
    accentColor: "#7c3aed",
    inStock: true,
  },
  {
    id: 12,
    name: "حزام لفرد الظهر كامل",

    category: "rehabilitation",

    price: 800,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/belt/belt-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/belt/belt-2.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.5,
    reviews: 61,
    badge: null,
    badgeColor: null,
    description: "حزام طبي لفرد الظهر ودعم العمود الفقري.",
    emoji: "🦴",
    color: "#e8f8f5",
    accentColor: "#10b981",
    inStock: true,
  },
  {
    id: 13,
    name: "ركبة بدعامة وعداد",

    category: "rehabilitation",

    price: 1800,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/knee/knee-5.jpeg",
      },
    ],

    oldPrice: 2000,
    rating: 4.7,
    reviews: 48,
    badge: "الأكثر مبيعاً",
    badgeColor: "#0ea5b5",
    description: "دعامة ركبة مزودة بعداد للحركة.",
    emoji: "🦿",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 14,
    name: "ركبة بدعامة",

    category: "rehabilitation",

    price: 600,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/knee/knee-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/knee/knee-4.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.5,
    reviews: 80,
    badge: null,
    badgeColor: null,
    description: "دعامة ركبة طبية عالية الجودة.",
    emoji: "🦿",
    color: "#e0f2fe",
    accentColor: "#0284c7",
    inStock: true,
  },
  {
    id: 15,
    name: "ركبة بدون دعامة",

    category: "rehabilitation",

    price: 500,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/knee/knee-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/knee/knee-1.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.3,
    reviews: 44,
    badge: null,
    badgeColor: null,
    description: "رباط ركبة طبي مرن.",
    emoji: "🦿",
    color: "#e8f8f5",
    accentColor: "#10b981",
    inStock: true,
  },
  {
    id: 16,
    name: "عكاز رباعي",

    category: "rehabilitation",

    price: 400,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/crutch/crutch-5.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.6,
    reviews: 120,
    badge: "مستورد",
    badgeColor: "#0284c7",
    description: "عكاز رباعي ثابت لزيادة التوازن.",
    emoji: "🦯",
    color: "#e0f2fe",
    accentColor: "#0284c7",
    inStock: true,
  },
  {
    id: 17,
    name: "عكاز ثلاثي",

    category: "rehabilitation",

    price: 400,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/crutch/crutch-4.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.5,
    reviews: 78,
    badge: "مستورد",
    badgeColor: "#0284c7",
    description: "عكاز ثلاثي القاعدة.",
    emoji: "🦯",
    color: "#e0f2fe",
    accentColor: "#0284c7",
    inStock: true,
  },
  {
    id: 18,
    name: "عكاز ينطوي",

    category: "rehabilitation",

    price: 500,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/crutch/crutch-3.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.6,
    reviews: 92,
    badge: null,
    badgeColor: null,
    description: "عكاز قابل للطي وسهل الحمل.",
    emoji: "🦯",
    color: "#f0fdf4",
    accentColor: "#16a34a",
    inStock: true,
  },
  {
    id: 19,
    name: "عكاز أحادي",

    category: "rehabilitation",

    price: 250,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/crutch/crutch-2.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.4,
    reviews: 134,
    badge: null,
    badgeColor: null,
    description: "عكاز طبي أحادي الاستخدام.",
    emoji: "🦯",
    color: "#f0fdf4",
    accentColor: "#16a34a",
    inStock: true,
  },
  {
    id: 20,
    name: "عكاز بكشاف ينطوي",

    category: "rehabilitation",

    price: 550,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/crutch/crutch-1.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.7,
    reviews: 51,
    badge: "جديد",
    badgeColor: "#c9a84c",
    description: "عكاز قابل للطي مزود بكشاف.",
    emoji: "🔦",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 21,
    name: "مسدس مساج",

    category: "rehabilitation",

    price: 750,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/massage/massage-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/massage/massage-4.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.5,
    reviews: 89,
    badge: null,
    badgeColor: null,
    description: "مسدس مساج لتخفيف إجهاد العضلات وتحسين الدورة الدموية.",
    emoji: "💆",
    color: "#f0fdf4",
    accentColor: "#16a34a",
    inStock: true,
  },
  {
    id: 22,
    name: "مسدس مساج احترافي",

    category: "rehabilitation",

    price: 3400,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/massage/massage-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/massage/massage-2.jpeg",
      },
    ],

    oldPrice: 3800,
    rating: 4.9,
    reviews: 42,
    badge: "Premium",
    badgeColor: "#7c3aed",
    description: "مسدس مساج احترافي متعدد السرعات والرؤوس.",
    emoji: "💆",
    color: "#f5f0ff",
    accentColor: "#7c3aed",
    inStock: true,
  },
  {
    id: 23,
    name: "سماعة الترالايف بروفيشنال",

    category: "diagnostic",

    price: 1700,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-9.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-10.jpeg",
      },
    ],

    oldPrice: 1900,
    rating: 4.9,
    reviews: 134,
    badge: "الأكثر مبيعاً",
    badgeColor: "#0ea5b5",
    description: "سماعة طبية احترافية عالية الدقة.",
    emoji: "🩺",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 24,
    name: "سماعة الترالايف براون ايديشن",

    category: "diagnostic",

    price: 2000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-7.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-8.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.8,
    reviews: 61,
    badge: "جديد",
    badgeColor: "#c9a84c",
    description: "سماعة طبية براون إيديشن بتصميم مميز.",
    emoji: "🤎",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 25,
    name: "سماعة الترالايف بلاك ايديشن",

    category: "diagnostic",

    price: 2200,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-6.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-5.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.9,
    reviews: 73,
    badge: "Premium",
    badgeColor: "#7c3aed",
    description: "سماعة طبية بلاك إيديشن بجودة عالية.",
    emoji: "🖤",
    color: "#f5f0ff",
    accentColor: "#7c3aed",
    inStock: true,
  },
  {
    id: 26,
    name: "سماعة الترالايف لايت",

    category: "diagnostic",

    price: 300,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-4.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.3,
    reviews: 207,
    badge: null,
    badgeColor: null,
    description: "سماعة طبية اقتصادية للاستخدام اليومي.",
    emoji: "🩺",
    color: "#e8f8f5",
    accentColor: "#10b981",
    inStock: true,
  },
  {
    id: 27,
    name: "سماعة الترالايف كارديو",

    category: "diagnostic",

    price: 3300,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/earphone/earphone-2.jpeg",
      },
    ],

    oldPrice: 3600,
    rating: 5.0,
    reviews: 28,
    badge: "Premium",
    badgeColor: "#7c3aed",
    description: "سماعة كارديو متخصصة لفحص القلب.",
    emoji: "❤️",
    color: "#f5f0ff",
    accentColor: "#7c3aed",
    inStock: true,
  },
  {
    id: 28,
    name: "جهاز ضغط هوائي الترالايف",

    category: "monitoring",

    price: 800,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/h-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/h-2.jpeg",
      },
    ],

    oldPrice: 950,
    rating: 4.5,
    reviews: 184,
    badge: "اقتصادي",
    badgeColor: "#10b981",
    description: "جهاز قياس ضغط هوائي للاستخدام المنزلي.",
    emoji: "📊",
    color: "#e8f8f5",
    accentColor: "#10b981",
    inStock: true,
  },
  {
    id: 29,
    name: "جهاز ضغط زئبقي البك تو",

    category: "monitoring",

    price: 3000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/z.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.8,
    reviews: 57,
    badge: "احترافي",
    badgeColor: "#0ea5b5",
    description: "جهاز ضغط زئبقي دقيق للاستخدام الطبي.",
    emoji: "📈",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 30,
    name: "جهاز بايباب فنت ميد",

    category: "monitoring",

    price: 33000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/haier/haier-2.jpeg",
      },
    ],

    oldPrice: 36000,
    rating: 5.0,
    reviews: 11,
    badge: "ضمان سنتين",
    badgeColor: "#c9a84c",
    description: "جهاز BIPAP صيني بضمان سنتين.",
    emoji: "🫁",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 31,
    name: "جهاز أوتوماتيك سيباب",

    category: "monitoring",

    price: 19000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/haier/haier-3.jpeg",
      },
    ],

    oldPrice: 21000,
    rating: 4.8,
    reviews: 18,
    badge: "ضمان سنتين",
    badgeColor: "#c9a84c",
    description: "جهاز CPAP أوتوماتيك صيني.",
    emoji: "😴",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 32,
    name: "جهاز بايباب هاير",

    category: "monitoring",

    price: 35000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/haier/haier-4.jpeg",
      },
    ],

    oldPrice: 38000,
    rating: 5.0,
    reviews: 9,
    badge: "Premium",
    badgeColor: "#7c3aed",
    description: "تكنولوجيا ألمانية وتصنيع صيني.",
    emoji: "🫁",
    color: "#f5f0ff",
    accentColor: "#7c3aed",
    inStock: true,
  },
  {
    id: 33,
    name: "جهاز أوتوماتيك سيباب هاير",

    category: "monitoring",

    price: 20000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/haier/haier-1.jpeg",
      },
    ],

    oldPrice: 22000,
    rating: 4.9,
    reviews: 13,
    badge: "جديد",
    badgeColor: "#c9a84c",
    description: "جهاز CPAP أوتوماتيك بتكنولوجيا ألمانية.",
    emoji: "😴",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 34,
    name: "مولد أكسجين 5 لتر",

    category: "monitoring",

    price: 25000,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/oxygen/bag-1.jpeg",
      },
    ],

    oldPrice: 27000,
    rating: 4.9,
    reviews: 34,
    badge: "ضمان سنة",
    badgeColor: "#0ea5b5",
    description: "مولد أكسجين 5 لتر صناعة صينية.",
    emoji: "🫧",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 35,
    name: "باج أكسجين 42 لتر",

    category: "monitoring",

    price: 750,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/oxygen/bag.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.5,
    reviews: 49,
    badge: null,
    badgeColor: null,
    description: "باج أكسجين بسعة 42 لتر.",
    emoji: "🫧",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 36,
    name: "ماسك سيباب وبايباب",

    category: "protection",

    price: 1900,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/mask/mask-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/mask/mask-2.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.7,
    reviews: 67,
    badge: null,
    badgeColor: null,
    description: "ماسك متوافق مع أجهزة CPAP وBIPAP.",
    emoji: "😷",
    color: "#f0fdf4",
    accentColor: "#16a34a",
    inStock: true,
  },
  {
    id: 37,
    name: "جهاز ضغط ميدسانا BU510",

    category: "monitoring",

    price: 2200,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/BU510-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/BU510-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/BU510-1.jpeg",
      },
    ],

    oldPrice: 2500,
    rating: 4.8,
    reviews: 121,
    badge: "ضمان 3 سنوات",
    badgeColor: "#c9a84c",
    description: "جهاز ضغط ألماني أبيض اللون.",
    emoji: "📊",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 38,
    name: "جهاز ضغط ميدسانا BU516",

    category: "monitoring",

    price: 2800,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu516-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu516-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu516-3.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu516-4.jpeg",
      },
    ],

    oldPrice: 3000,
    rating: 4.9,
    reviews: 95,
    badge: "ضمان 3 سنوات",
    badgeColor: "#c9a84c",
    description: "جهاز ضغط ألماني أسود اللون.",
    emoji: "📊",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 39,
    name: "جهاز استنشاق ميدسانا IN500",

    category: "monitoring",

    price: 3200,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/inhalation/inhalation-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/inhalation/inhalation-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/inhalation/inhalation-3.jpeg",
      },
    ],

    oldPrice: 3500,
    rating: 4.8,
    reviews: 82,
    badge: "ضمان 3 سنوات",
    badgeColor: "#c9a84c",
    description: "جهاز استنشاق ألماني عالي الكفاءة.",
    emoji: "🌬️",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 40,
    name: "جهاز ضغط ميدسانا BU565",

    category: "monitoring",

    price: 2200,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu565-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu565-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu565-3.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.7,
    reviews: 71,
    badge: "ديجيتال",
    badgeColor: "#0ea5b5",
    description: "جهاز ضغط ديجيتال ألماني.",
    emoji: "📈",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 41,
    name: "جهاز ضغط ميدسانا BU512",

    category: "monitoring",

    price: 2400,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu512-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu512-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu512-3.jpeg",
      },
    ],

    oldPrice: null,
    rating: 4.8,
    reviews: 66,
    badge: "ضمان 3 سنوات",
    badgeColor: "#c9a84c",
    description: "جهاز ضغط ألماني يعمل بالبطاريات.",
    emoji: "📊",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 42,
    name: "جهاز ضغط ميدسانا BU582",
    category: "monitoring",
    price: 2800,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu582-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu582-2.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/bu582-3.jpeg",
      },
    ],
    oldPrice: 3000,
    rating: 4.9,
    reviews: 54,
    badge: "شاشة مضيئة",
    badgeColor: "#0ea5b5",
    description: "جهاز ضغط ألماني بشاشة مضيئة.",
    emoji: "📈",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
  {
    id: 43,
    name: "جهاز ضغط الترالايف B5",

    category: "monitoring",

    price: 1700,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/b5-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/b5-2.jpeg",
      },
    ],
    oldPrice: 1900,
    rating: 4.7,
    reviews: 88,
    badge: "ضمان سنتين",
    badgeColor: "#c9a84c",
    description: "تكنولوجيا ألمانية وتصنيع صيني.",
    emoji: "📊",
    color: "#fff8e7",
    accentColor: "#c9a84c",
    inStock: true,
  },
  {
    id: 44,
    name: "جهاز ضغط بيرور",
    category: "monitoring",
    price: 2100,
    images: [
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/beurer-1.jpeg",
      },
      {
        alt: "جهاز ضغط بيرور",
        src: "./images/products/pressure/beurer-2.jpeg",
      },
    ],
    oldPrice: 2300,
    rating: 4.8,
    reviews: 97,
    badge: "ألماني",
    badgeColor: "#0ea5b5",
    description: "جهاز ضغط ألماني دقيق للاستخدام المنزلي.",
    emoji: "📊",
    color: "#e0f7ff",
    accentColor: "#0ea5b5",
    inStock: true,
  },
];
