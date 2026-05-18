import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  nav: { home: "Home", menu: "Menu", experience: "Experience", contact: "Contact" },
  hero: {
    eyebrow: "MALIA, CRETE",
    title: "COCONUT BAR",
    sub: "Where every night becomes a memory",
    cta1: "Explore Menu",
    cta2: "Find Us",
  },
  vibe: { title: "THE VIBE", desc: "White furniture under neon skies. Coconut Bar is Malia's open-air playground — tropical cocktails, premium shisha, and DJs spinning the soundtrack to your Cretan nights." },
  info: {
    cocktails: "Crafted Cocktails", cocktailsDesc: "Over 50 signature mixes",
    shisha: "Premium Shisha", shishaDesc: "A wide selection of flavours",
    dj: "Live DJ Nights", djDesc: "Every weekend from 9PM",
  },
  offer: { title: "WHAT WE OFFER", see: "See Full Menu" },
  cat: { cocktails: "Cocktails", mocktails: "Mocktails & Soft Drinks", shisha: "Shisha", food: "Food & Snacks" },
  find: { title: "FIND US IN MALIA", addr: "Malia Beach Road, Malia 70007, Crete, Greece" },
  menuPage: { title: "OUR MENU", shishaNote: "All shisha prepared fresh. 60 min session." },
  exp: {
    title: "THE COCONUT EXPERIENCE",
    about: "About the Bar",
    p1: "Born in the heart of Malia, Coconut Bar is where the island's energy comes alive after dark. White walls, neon light, and the sound of music drifting through the warm Cretan air — this is more than a bar, it's a feeling.",
    p2: "Whether you're settling in for a long evening of cocktails, sharing a shisha with friends, or dancing until sunrise, Coconut has crafted a space designed around one thing: your perfect night.",
    p3: "Open every night from 7PM. No dress code — just good vibes.",
    h1: "Tropical Design", h1d: "White furniture, neon lights, and palm vibes inspired by the best beach bars in the world",
    h2: "DJ Nights", h2d: "Every Friday and Saturday, resident and guest DJs take over",
    h3: "Golden Hour", h3d: "Start your night with our sunset happy hour — cocktails from €6, 7–9PM",
    follow: "FOLLOW US",
    hours: "Opening Hours",
  },
  contact: {
    title: "GET IN TOUCH", location: "Location", phone: "Phone", email: "Email", hours: "Hours",
  },
  hours: { weekday: "Mon–Thu", fri: "Fri–Sat", sun: "Sunday" },
  footer: { rights: "All rights reserved." },
};

const gr = {
  nav: { home: "Αρχική", menu: "Μενού", experience: "Εμπειρία", contact: "Επικοινωνία" },
  hero: {
    eyebrow: "ΜΑΛΙΑ, ΚΡΗΤΗ",
    title: "COCONUT BAR",
    sub: "Όπου κάθε βράδυ γίνεται ανάμνηση",
    cta1: "Δες το Μενού",
    cta2: "Βρες μας",
  },
  vibe: { title: "Η ΑΤΜΟΣΦΑΙΡΑ", desc: "Λευκά έπιπλα κάτω από νέον ουρανούς. Το Coconut Bar είναι η ανοιχτή πίστα των Μαλίων — τροπικά κοκτέιλ, premium σίσα και DJs που γράφουν το soundtrack των κρητικών σου νυχτών." },
  info: {
    cocktails: "Χειροποίητα Κοκτέιλ", cocktailsDesc: "Πάνω από 50 υπογραφές",
    shisha: "Premium Σίσα", shishaDesc: "Μεγάλη ποικιλία γεύσεων",
    dj: "Live DJ Βραδιές", djDesc: "Κάθε Σαββατοκύριακο από τις 9ΜΜ",
  },
  offer: { title: "ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ", see: "Όλο το Μενού" },
  cat: { cocktails: "Κοκτέιλ", mocktails: "Mocktails & Αναψυκτικά", shisha: "Σίσα", food: "Φαγητό & Σνακ" },
  find: { title: "ΒΡΕ ΜΑΣ ΣΤΑ ΜΑΛΙΑ", addr: "Malia Beach Road, Μάλια 70007, Κρήτη, Ελλάδα" },
  menuPage: { title: "ΤΟ ΜΕΝΟΥ", shishaNote: "Όλες οι σίσες ετοιμάζονται φρέσκες. Συνεδρία 60 λεπτών." },
  exp: {
    title: "Η ΕΜΠΕΙΡΙΑ COCONUT",
    about: "Για το Bar",
    p1: "Γεννημένο στην καρδιά των Μαλίων, το Coconut Bar είναι εκεί που η ενέργεια του νησιού ζωντανεύει με το σούρουπο. Λευκοί τοίχοι, νέον φως και ο ήχος της μουσικής στον ζεστό κρητικό αέρα — δεν είναι απλώς ένα μπαρ, είναι αίσθηση.",
    p2: "Είτε για μια μεγάλη βραδιά κοκτέιλ, για σίσα με παρέα ή για χορό μέχρι την ανατολή, το Coconut έχει σχεδιαστεί γύρω από ένα πράγμα: τη δική σου τέλεια νύχτα.",
    p3: "Ανοιχτά κάθε βράδυ από τις 7ΜΜ. Χωρίς dress code — μόνο καλή διάθεση.",
    h1: "Τροπικό Design", h1d: "Λευκά έπιπλα, νέον φώτα και φοίνικες εμπνευσμένα από τα καλύτερα beach bars του κόσμου",
    h2: "DJ Βραδιές", h2d: "Κάθε Παρασκευή και Σάββατο, resident και guest DJs αναλαμβάνουν δράση",
    h3: "Χρυσή Ώρα", h3d: "Ξεκίνα τη βραδιά με το sunset happy hour — κοκτέιλ από €6, 7–9ΜΜ",
    follow: "ΑΚΟΛΟΥΘΗΣΕ ΜΑΣ",
    hours: "Ωράριο Λειτουργίας",
  },
  contact: {
    title: "ΕΠΙΚΟΙΝΩΝΙΑ", location: "Τοποθεσία", phone: "Τηλέφωνο", email: "Email", hours: "Ώρες",
  },
  hours: { weekday: "Δευ–Πεμ", fri: "Παρ–Σάβ", sun: "Κυριακή" },
  footer: { rights: "Όλα τα δικαιώματα διατηρούνται." },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, gr: { translation: gr } },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    initImmediate: false,  // ← αυτό διορθώνει το SSR πρόβλημα
  });
}

if (typeof window !== "undefined") {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) i18n.changeLanguage(savedLang);
}

export default i18n;