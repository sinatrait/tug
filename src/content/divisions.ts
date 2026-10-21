import type { EnquiryTopicId } from "@/content/enquiry";

export const businessIntro = {
  eyebrow: "Businesses",
  title: "Grow with The United Group",
  summary: "Innovative solutions for your business needs.",
} as const;

export const divisions = [
  {
    slug: "financial",
    name: "Financial",
    topic: "financial" as EnquiryTopicId,
    summary:
      "Investment opportunities spanning business and personal loans, investment management, and financial planning.",
    body: "Our financial services division offers a range of investment opportunities, including business and personal loans, investment management, and financial planning.",
  },
  {
    slug: "business-investment",
    name: "Business Investment",
    topic: "investment" as EnquiryTopicId,
    summary:
      "Support for entrepreneurs and small businesses, from funding and market intelligence to strategic guidance.",
    body: "The Business Investment division of The United Group is dedicated to helping entrepreneurs and small businesses succeed. We understand that starting, growing, and managing a business can be challenging, and that is why we provide a range of services and resources to support our clients. From access to funding and market intelligence, to strategic guidance and mentorship, our team is here to help you every step of the way. Whether you are just starting out, looking to expand, or seeking new opportunities, The United Group is your partner in success. With our expertise and resources, we can help you achieve your business goals and reach new heights.",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    topic: "infrastructure" as EnquiryTopicId,
    summary:
      "Innovative and sustainable solutions to the challenges facing communities and businesses.",
    body: "In the infrastructure sector, we provide innovative and sustainable solutions to the challenges facing communities and businesses.",
  },
  {
    slug: "natural-minerals-and-general-trading",
    name: "Natural Minerals and General Trading",
    topic: "minerals-trading" as EnquiryTopicId,
    summary:
      "Responsible sourcing of minerals, with general trading across equipment, raw materials, and consumer goods.",
    body: "The Natural Minerals division of The United Group supplies high-quality minerals, such as coal and iron ore, to meet the demands of industries around the world. We focus on sustainability and responsible sourcing to provide our clients with the resources they need.\n\nIn addition to these core services, our general trading division offers a range of products and services to meet the diverse needs of our clients. Whether you are looking for equipment, raw materials, or consumer goods, we have the expertise and resources to help you succeed.",
  },
] as const;

export type DivisionSlug = (typeof divisions)[number]["slug"];

export function getDivision(slug: string) {
  return divisions.find((division) => division.slug === slug);
}
