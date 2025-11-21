export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  highlight?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "valeofx-rashid",
    quote:
      "Working with ValeoFx felt like plugging in an elite internal product team. They can ideate, execute, and ship at a velocity I haven’t seen before.",
    author: "Rashid Al-Qahtani",
    role: "Director of Digital",
    company: "Saudi Tourism Authority",
    avatar: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=200&q=80",
    highlight: "“Elite internal product team…”",
  },
  {
    id: "valeofx-sarah",
    quote:
      "Their team translated complex tokenomics into a delightful experience. We hit every milestone, passed every audit, and our community loved the launch.",
    author: "Sarah Mensah",
    role: "Co-Founder",
    company: "MintoCrypto",
    avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "valeofx-miguel",
    quote:
      "ValeoFx doesn’t just design pretty UI—they own outcomes. Our conversion lift speaks for itself and they keep iterating alongside us.",
    author: "Miguel Díaz",
    role: "Head of Digital",
    company: "EuroMotors",
    avatar: "https://images.unsplash.com/photo-1544723795-432537e81c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "valeofx-amelia",
    quote:
      "From accessibility auditing to edge deployment, ValeoFx delivered a modern commerce experience that our team can actually maintain.",
    author: "Amelia Wong",
    role: "VP Product",
    company: "Glow Beauty",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
];
