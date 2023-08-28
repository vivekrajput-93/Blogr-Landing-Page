import { v4 as uuidv4 } from "uuid";

export const footer = [
  {
    id: uuidv4(),
    title: "Product",
    links: ["Overview", "Prcing", "Marketplace", "Integrations", "Feature"],
  },
  {
    id: uuidv4(),
    title: "Company",
    links: ["About", "Team", "Blog", "Careers",]
  },
  {
    id: uuidv4(),
    title: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn",]
  },
  {
    id: uuidv4(),
    title: "Links",
    links: ["Twitter", "Facebook", "Instagram", "Github"]
  },
];
