/** The Private Equity Forum marketing constants and Airtable configuration. */

export const GUILD_AIRTABLE_FORM_URL =
  process.env.NEXT_PUBLIC_GUILD_AIRTABLE_FORM_URL ?? "";

export const GUILD_AIRTABLE_EMBED_URL =
  process.env.NEXT_PUBLIC_GUILD_AIRTABLE_EMBED_URL ?? "";

export const GUILD_MUMBAI_FIRST_EVENT_DATE =
  process.env.NEXT_PUBLIC_GUILD_MUMBAI_FIRST_EVENT_DATE ?? "14 August 2026";

export const GUILD = {
  slug: "/guild",
  name: "The Private Equity Forum",
  shortName: "Forum",
  badge: "Free · Forum & community",
  kicker: "Private equity forum · Community · Member group",
  tagline: "A member-run group for buyout finance",
  body: "A free private equity forum and community. Deal teardowns, practitioner speakers, and city chapters in Mumbai and London. Application required.",
  heroTitle: "The private equity forum for practitioners",
  heroLead:
    "The Private Equity Forum is a free forum, community, and member-run group for people serious about the buyout side of finance.",
  heroDetail:
    "Real deal teardowns. Practitioners in the room. City chapters shaped by members, not by a platform.",
} as const;

export const guildInsiderPillars = [
  {
    index: "I",
    title: "Closed-door standard",
    body: "What is discussed in the room stays in the room. No recordings. No content farming. A practitioner forum, not a broadcast channel.",
  },
  {
    index: "II",
    title: "Practitioner-first agenda",
    body: "Speakers are active dealmakers. Fund partners, counsel, lenders. Members shape the calendar through chapter committees.",
  },
  {
    index: "III",
    title: "Filtered peer admission",
    body: "Every member is application-reviewed. IB, Big 4, law, consulting, CAs, operators. A room where introductions carry weight.",
  },
] as const;

export const guildMemberBenefits = [
  {
    title: "Deal teardowns",
    body: "Real lower mid-market transactions taken apart live. The teaser, the CIM, the debt structure, where the deal nearly died.",
  },
  {
    title: "Practitioner speakers",
    body: "Fund partners, deal lawyers, debt providers. People who close, not people who post.",
  },
  {
    title: "A filtered room",
    body: "Every member is application-reviewed. IB, Big 4, law, consulting, CAs, operators. Peers worth meeting.",
  },
  {
    title: "City chapters",
    body: "Monthly in-person events run by a member committee in each city.",
  },
] as const;

export const guildEventImages = [
  {
    id: "mumbai-teardown",
    chapter: "Mumbai",
    title: "Anatomy of a buyout",
    date: GUILD_MUMBAI_FIRST_EVENT_DATE,
    location: "Mumbai chapter",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Professionals reviewing deal materials at a forum teardown session",
  },
  {
    id: "london-networking",
    chapter: "London",
    title: "Founding member reception",
    date: "October 2026",
    location: "London chapter",
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    alt: "Forum networking reception with practitioners in conversation",
  },
  {
    id: "deal-roundtable",
    chapter: "Mumbai",
    title: "Debt structure roundtable",
    date: "Monthly chapter event",
    location: "Mumbai chapter",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Small group roundtable on transaction structuring",
  },
  {
    id: "practitioner-talk",
    chapter: "London",
    title: "Practitioner speaker night",
    date: "Monthly chapter event",
    location: "London chapter",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    alt: "Speaker session at a forum chapter evening",
  },
] as const;

export type GuildChapterFilter = "All" | "Mumbai" | "London";

export const guildChapters = [
  {
    city: "Mumbai",
    status: "Live from August 2026",
    detail: `First event: Anatomy of a buyout. ${GUILD_MUMBAI_FIRST_EVENT_DATE}.`,
    featuredEventId: "mumbai-teardown",
  },
  {
    city: "London",
    status: "Launching October 2026",
    detail: "Founding members and chapter committee applications open now.",
    featuredEventId: "london-networking",
  },
] as const;

export function getChapterEvents(city: "Mumbai" | "London") {
  return guildEventImages.filter((event) => event.chapter === city);
}

export function getGuildEventById(id: string) {
  return guildEventImages.find((event) => event.id === id);
}

export const guildHowItWorks = [
  {
    step: "1",
    title: "Apply",
    body: "One form, four minutes. We ask who you are and why you're serious.",
  },
  {
    step: "2",
    title: "Review",
    body: "Every application gets a decision within 72 hours. The only filter is seriousness.",
  },
  {
    step: "3",
    title: "Join your chapter",
    body: "Accepted members receive the WhatsApp community invite and event access by email.",
  },
] as const;

export const guildForList = [
  "Investment banking and M&A professionals",
  "Big 4 and transaction services",
  "Consultants",
  "Corporate lawyers",
  "CAs",
  "Operators and founders",
  "Final-year students serious about PE",
] as const;

export const guildNotForList = [
  "Anyone looking for a certificate (there is none)",
  "Anyone selling to members",
  "Anyone expecting job guarantees",
] as const;

export const guildPartnershipOfferings = [
  {
    title: "Campus events",
    body: "Co-hosted Forum sessions on campus: deal teardowns, practitioner panels, and application workshops for students serious about buyout finance.",
  },
  {
    title: "Society partnerships",
    body: "Finance and investment societies receive a direct line to city chapter calendars, speaker pipelines, and a filtered application path for members.",
  },
  {
    title: "Careers office access",
    body: "University careers teams receive Forum event calendars and briefing materials for students exploring private equity, without a paid programme requirement.",
  },
] as const;

export const guildPartnershipAudience = [
  "Business schools and MBA programmes",
  "Undergraduate finance and investment societies",
  "University careers and employability teams",
  "Law and accounting faculties with PE interest",
] as const;

export const guildPeFirms = [
  { id: "blackstone", name: "Blackstone", logo: "/partners/pe/blackstone.svg" },
  { id: "kkr", name: "KKR", logo: "/partners/pe/kkr.svg" },
  { id: "carlyle", name: "The Carlyle Group", logo: "/partners/pe/carlyle.svg" },
  { id: "apollo", name: "Apollo Global Management", logo: "/partners/pe/apollo.svg" },
  { id: "brookfield", name: "Brookfield", logo: "/partners/pe/brookfield.svg" },
  { id: "tpg", name: "TPG", logo: "/partners/pe/tpg.svg" },
  { id: "bain-capital", name: "Bain Capital", logo: "/partners/pe/bain-capital.png" },
  { id: "cvc", name: "CVC Capital Partners", logo: "/partners/pe/cvc.svg" },
  { id: "eqt", name: "EQT", logo: "/partners/pe/eqt.svg" },
  { id: "warburg", name: "Warburg Pincus", logo: "/partners/pe/warburg-pincus.svg" },
  { id: "silver-lake", name: "Silver Lake", logo: "/partners/pe/silver-lake.png" },
  { id: "general-atlantic", name: "General Atlantic", logo: "/partners/pe/general-atlantic.svg" },
] as const;

export const guildHeroProfessions = [
  "Investment banking and M&A professionals",
  "Big 4 and transaction services",
  "Consultants",
  "Corporate lawyers",
] as const;

export const guildMbaCampuses = [
  { id: "hbs", name: "Harvard Business School", logo: "/partners/mba/hbs.svg" },
  { id: "wharton", name: "The Wharton School", logo: "/partners/mba/wharton.svg" },
  { id: "stanford", name: "Stanford GSB", logo: "/partners/mba/stanford-gsb.svg" },
  { id: "insead", name: "INSEAD", logo: "/partners/mba/insead.svg" },
  { id: "lbs", name: "London Business School", logo: "/partners/mba/lbs.svg" },
  { id: "columbia", name: "Columbia Business School", logo: "/partners/mba/columbia.png" },
  { id: "booth", name: "Chicago Booth", logo: "/partners/mba/booth.svg" },
  { id: "sloan", name: "MIT Sloan", logo: "/partners/mba/sloan.svg" },
  { id: "kellogg", name: "Kellogg School", logo: "/partners/mba/kellogg.svg" },
  { id: "oxford", name: "Oxford Saïd", logo: "/partners/mba/oxford-said.svg" },
  { id: "isb", name: "ISB", logo: "/partners/mba/isb.png" },
  { id: "iima", name: "IIM Ahmedabad", logo: "/partners/mba/iima.svg" },
] as const;

export const guildFaqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes. There is no paid tier of the Forum. Norland Academy runs paid training programmes separately, and forum members hear about them only if they opt in.",
  },
  {
    question: "Do I need PE experience?",
    answer: "No. You need a serious reason to be in the room. The application asks for it.",
  },
  {
    question: "Is this online or in person?",
    answer: "Chapters meet in person monthly. The community between events runs on WhatsApp.",
  },
  {
    question: "Who runs the chapters?",
    answer:
      "A member committee in each city: chapter lead, events, partnerships, and content, on six-month terms. The Forum is built by members and run by members.",
  },
  {
    question: "What's the relationship with Norland Academy?",
    answer:
      "The Forum is a Norland Academy initiative. Membership is free and independent of our paid programmes.",
  },
] as const;
