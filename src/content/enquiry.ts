import { company } from "@/content/company";

export const enquiryTopics = {
  partnership: {
    id: "partnership",
    label: "Corporate partnership",
    subject: "Enquiry: corporate partnership",
    prompt:
      "To discuss a corporate partnership, please call or email The United Group.",
  },
  financial: {
    id: "financial",
    label: "Financial",
    subject: "Enquiry: Financial division",
    prompt:
      "To enquire about the Financial division, please call or email The United Group.",
  },
  investment: {
    id: "investment",
    label: "Business Investment",
    subject: "Enquiry: Business Investment division",
    prompt:
      "To enquire about the Business Investment division, please call or email The United Group.",
  },
  infrastructure: {
    id: "infrastructure",
    label: "Infrastructure",
    subject: "Enquiry: Infrastructure division",
    prompt:
      "To enquire about the Infrastructure division, please call or email The United Group.",
  },
  "minerals-trading": {
    id: "minerals-trading",
    label: "Natural Minerals and General Trading",
    subject: "Enquiry: Natural Minerals and General Trading",
    prompt:
      "To enquire about Natural Minerals and General Trading, please call or email The United Group.",
  },
  befodize: {
    id: "befodize",
    label: "BEFODIZE",
    subject: "Enquiry: BEFODIZE",
    prompt: "To enquire about BEFODIZE, please call or email The United Group.",
  },
} as const;

export type EnquiryTopicId = keyof typeof enquiryTopics;

export function isEnquiryTopicId(value: string | undefined): value is EnquiryTopicId {
  return Boolean(value && value in enquiryTopics);
}

export function enquiryPath(topic?: EnquiryTopicId) {
  if (!topic) {
    return "/contact";
  }

  return `/contact?topic=${topic}`;
}

export function enquiryMailto(topic?: EnquiryTopicId) {
  if (!topic) {
    return company.emailHref;
  }

  const subject = encodeURIComponent(enquiryTopics[topic].subject);
  return `${company.emailHref}?subject=${subject}`;
}
