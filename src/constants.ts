import { Service, ClinicInfo } from './types';

export const CLINIC_INFO: ClinicInfo = {
  name: "AcuMeD Acupuncture & Herbs Clinic",
  address: "124 Watertown St, Suite #3A, Watertown, MA 02472",
  phone: "(617) 393-1998",
  email: "mostafmed@acumedm.com",
  hours: {
    "Monday": "9:00 AM – 6:00 PM",
    "Tuesday": "9:00 AM – 6:00 PM",
    "Wednesday": "9:00 AM – 6:00 PM",
    "Thursday": "9:00 AM – 6:00 PM",
    "Friday": "9:00 AM – 6:00 PM",
    "Saturday": "9:00 AM – 2:00 PM",
    "Sunday": "Closed"
  }
};

export const SERVICES: Service[] = [
  {
    id: "moving-qi",
    title: "Moving Qi",
    description: "Traditional Chinese medicine technique using thin needles to stimulate specific points on the body to move Qi, relieve pain, and treat various physical, mental, and emotional conditions.",
    icon: "needle",
    image: "https://o9v.003.mytemp.website/acumed/images/MovingQi.jpg"
  },
  {
    id: "moxa",
    title: "Moxa",
    description: "Traditional therapeutic technique involving the burning of dried mugwort (moxa) near the skin to stimulate flow, facilitate healing, and strengthen the blood.",
    icon: "flame",
    image: "https://o9v.003.mytemp.website/acumed/images/Moxa.jpg"
  },
  {
    id: "cupping",
    title: "Cupping / Hijama",
    description: "Ancient therapeutic technique using suction cups to improve blood circulation, release muscle tension, and clear toxins from the body.",
    icon: "cup",
    image: "https://o9v.003.mytemp.website/acumed/images/Cupping.jpg"
  },
  {
    id: "microsystem",
    title: "Microsystem",
    description: "Specialized acupuncture systems focusing on specific areas like the ear, scalp, or hand to treat the entire body through these microsystems.",
    icon: "zap",
    image: "https://o9v.003.mytemp.website/acumed/images/Microsystem.jpg"
  },
  {
    id: "avicenna",
    title: "Avicenna Healing",
    description: "Traditional Persian medicine inspired by Avicenna (Ibn Sina), focusing on the balance of humors and natural remedies for holistic wellness.",
    icon: "sparkles",
    image: "http://o9v.003.mytemp.website/acumed/images/avicenna.jpg"
  },
  {
    id: "combination-therapy",
    title: "Combination Therapy",
    description: "A synergistic approach combining multiple therapeutic modalities to optimize healing outcomes and address complex health concerns.",
    icon: "radio",
    image: "https://o9v.003.mytemp.website/acumed/images/Combinationtherapy.jpg"
  }
];

export const IMAGES = {
  drMedhati: "https://www.acumedm.net/wp-content/themes/acumed-pro/images/about-avicenna.jpg",
  clinic: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=800",
  hero: "https://o9v.003.mytemp.website/acumed/images/acumedm.jpg"
};
