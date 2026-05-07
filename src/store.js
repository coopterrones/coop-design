import create from "zustand";
import brandfolderPreview from "./Assets/brandfolder-preview.gif";
import smartsheetPreview from "./Assets/smartsheet-preview.gif";

export const useStore = create((set) => ({
  work: [
    {
      id: 1,
      name: "Brandfolder",
      slug: "brandfolder",
      title: "Software Engineer",
      team: "Integrations · 2021–2023",
      image: brandfolderPreview,
      tagline: "Many platforms. One source of truth. The seams? Invisible.",
      descriptions: [
        "Built and maintained frontend integrations connecting a DAM platform with enterprise tools including Shopify, Getty, Highspot, Asana, Wrike, Salsify, and HubSpot, enabling asset management workflows across customer tech stacks.",
        "Owned end-to-end delivery of multiple integration features, collaborating across backend, product, and design to ship reliably under tight timelines.",
        "Played a key role in bridging Brandfolder's DAM capabilities into the broader Smartsheet ecosystem following the acquisition.",
      ],
    },
    {
      id: 2,
      name: "Smartsheet",
      slug: "smartsheet",
      title: "Senior Software Engineer",
      team: "Content Platform · 2023–Present",
      image: smartsheetPreview,
      tagline: "Content is king. Enterprise customers. Deliver a single place for content to live.",
      descriptions: [
        "Core engineer on a greenfield enterprise content management platform serving hundreds of enterprise customers, building net-new capabilities while managing migration away from legacy file and attachment systems.",
        "Led frontend delivery for a platform decomposition initiative, migrating a monolithic application toward a service-oriented architecture with improved scalability, compliance posture, and long-term maintainability.",
        "Independently scoped and executed a full CI/CD infrastructure migration across pipelines, permissions, and versioning — delivered on time with zero defects or production interruptions.",
        "Optimized API query structure and frontend data-fetching patterns, significantly reducing search response times for end users.",
        "Researched, architected, and implemented an application-level performance metrics service and error logging infrastructure, providing real-time system health visibility across all environments.",
      ],
    },
  ],
}));
