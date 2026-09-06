// Centralized site data — constructionprofessionalliability.com

export const SITE = {
  name: "Construction Professional Liability Insurance",
  legalName: "Construction Professional Liability Insurance (by Contractors Choice Agency)",
  domain: "constructionprofessionalliability.com",
  url: "https://constructionprofessionalliability.com",
  tagline: "E&O Insurance for Design-Build Contractors",
  description:
    "Specialized professional liability (E&O) insurance for construction contractors — design-build firms, architect-contractors, construction managers, and specialty trades with professional service exposure. Coverage for errors, omissions, design failures, and professional negligence claims. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "CPL Insurance",
  brandSub: "Construction E&O",
  nicheShort: "construction professional liability",
  nicheShortCap: "Construction Professional Liability",
  nichePlural: "construction firms",
  nichePluralCap: "Construction Firms",
  operator: "design-build contractor",
  operatorCap: "Design-Build Contractor",
  industry: "construction professional services",
  industryCap: "Construction Professional Services",
  audience: "design-build contractors",
  audienceCap: "Design-Build Contractors",
  ownerTitle: "contractor",
  regionPill: "Texas · California · National",
  serviceSuffix: "Construction Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "professional-liability",
    title: "Professional Liability (E&O)",
    short: "Core coverage for design-build contractors",
    description:
      "Construction E&O coverage protecting design-build contractors, construction managers, and architect-contractors from claims of professional errors, design failures, specification mistakes, and negligent professional services. Claims-made coverage with prior-acts options.",
    icon: "FileSignature",
    keywords: ["construction professional liability insurance", "construction E&O insurance", "design-build professional liability", "contractor errors omissions"],
  },
  {
    slug: "general-liability",
    title: "General Liability",
    short: "Third-party bodily injury & property damage",
    description:
      "Commercial general liability for construction contractors — covering third-party bodily injury, property damage, and personal injury arising from your construction operations, completed projects, and premises.",
    icon: "ShieldCheck",
    keywords: ["construction general liability insurance", "contractor GL coverage", "construction site liability"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Coverage for your construction crews",
    description:
      "Workers compensation for construction contractors — correct classification for design-build crews, skilled trades, and professional staff, with injury coverage across all project types and locations.",
    icon: "HardHat",
    keywords: ["construction workers compensation", "contractor workers comp", "design-build WC coverage"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Fleet & project vehicle coverage",
    description:
      "Commercial auto insurance for contractor vehicles — covering pickup trucks, vans, flatbeds, and specialty vehicles used for project work, material transport, and site supervision.",
    icon: "Truck",
    keywords: ["contractor commercial auto insurance", "construction fleet insurance", "contractor vehicle coverage"],
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella / Excess Liability",
    short: "High-limit protection for major projects",
    description:
      "Umbrella and excess liability coverage providing additional limits above your primary GL, auto, and professional liability for large construction projects, public work, and contract requirements.",
    icon: "Umbrella",
    keywords: ["construction umbrella insurance", "contractor excess liability", "design-build umbrella coverage"],
  },
  {
    slug: "builders-risk",
    title: "Builders Risk",
    short: "Project property during construction",
    description:
      "Builders risk coverage protecting the project structure, materials, and equipment during construction — covering fire, theft, vandalism, wind, and other perils before project completion and occupancy.",
    icon: "Building2",
    keywords: ["builders risk insurance", "construction project insurance", "course of construction coverage"],
  },
  {
    slug: "pollution-liability",
    title: "Pollution Liability",
    short: "Construction pollution & environmental exposure",
    description:
      "Contractor pollution liability covering environmental claims that arise from construction operations — disturbed contaminated soil, asbestos or lead in renovation projects, fuel spills, and other pollution conditions on project sites.",
    icon: "Droplets",
    keywords: ["contractor pollution liability", "construction pollution insurance", "CPL coverage construction"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Dallas · Houston · Austin · San Antonio", intro: "Texas design-build contractors operate under some of the nation's largest commercial construction volumes. We place professional liability and E&O programs for Texas contractors working in commercial, industrial, and public construction across all major metros." },
  { slug: "california", name: "California", region: "Los Angeles · San Francisco · San Diego", intro: "California's strict licensing and professional standards for design-build contractors create specific E&O exposure. We build professional liability programs for California contractors navigating the state's complex construction law and contract environment." },
  { slug: "florida", name: "Florida", region: "Miami · Orlando · Tampa · Jacksonville", intro: "Florida construction activity — commercial, hospitality, and residential — drives significant design-build professional liability exposure. We serve Florida contractors from major metros to coastal markets with hurricane-exposure project risk." },
  { slug: "new-york", name: "New York", region: "New York City · Upstate · Long Island", intro: "New York's complex construction environment — high-rise, mixed-use, transit infrastructure, and renovation — creates significant professional liability exposure for design-build contractors. We serve NYC and statewide contractors." },
  { slug: "illinois", name: "Illinois", region: "Chicago Metro · Statewide", intro: "Chicago's commercial construction market produces substantial E&O risk for design-build and construction management firms. We place professional liability programs for Illinois contractors across commercial, industrial, and institutional projects." },
  { slug: "washington", name: "Washington", region: "Seattle · Spokane · Tacoma", intro: "The Pacific Northwest's technology-driven commercial construction creates sophisticated design-build E&O exposure. We serve Washington contractors building in the tech campus, data center, and commercial markets." },
  { slug: "colorado", name: "Colorado", region: "Denver · Colorado Springs · Fort Collins", intro: "Colorado's booming Front Range construction market and mountain resort development create diverse professional liability exposure for design-build contractors. We build E&O programs for Colorado contractors across all project types." },
  { slug: "arizona", name: "Arizona", region: "Phoenix · Tucson · Chandler · Scottsdale", intro: "Arizona's high-growth commercial construction market drives demand for design-build professional liability coverage. We serve Arizona contractors — from Phoenix metro commercial construction to resort and industrial projects statewide." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Construction E&O specialists", icon: "FileSignature" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Design-build contractors insured", prefix: "" },
  { value: 20, suffix: "+", label: "Years placing construction E&O", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We got hit with a design defect claim on a commercial renovation — the client alleged our specification for the HVAC system was professionally negligent. Our E&O carrier defended it and the claim settled well below our limit. Without professional liability, that claim would have been personal.", name: "Marcus T.", role: "Principal, Design-Build Firm", location: "Texas" },
  { quote: "Our GL carrier told us the construction defect claim was a professional services matter and denied it. Our E&O carrier picked it up. The lesson: design-build contractors need both coverages, and they need to be coordinated. CCA structured ours so there's no gap.", name: "Karen L.", role: "VP Operations, Construction Manager", location: "California" },
  { quote: "We've been using CCA for E&O and GL on large commercial design-build since 2019. They understand how design-build contracts transfer professional responsibility and make sure our coverage matches. Renewal is smooth and they actually check our contracts.", name: "Robert C.", role: "Owner, General Contracting", location: "Florida" },
] as const;
