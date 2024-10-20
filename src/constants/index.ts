import { type CardType } from "@/app/notion-kanban/_types";

export const navLinks = [
  "/on-scroll-reveal",
  "/overall-anim",
  "/horizontal-scroll",
  "/page-transition",
  "/parallax-scroll",
  "/notion-kanban",
];

export const DEFAULT_CARDS: CardType[] = [
  {
    title: "Look into render bug in dashboard",
    id: "1",
    column: "backlog",
  },
  {
    title: "Design new user profile page",
    id: "2",
    column: "todo",
  },
  {
    title: "Implement authentication feature",
    id: "3",
    column: "doing",
  },
  {
    title: "Fix typos in the documentation",
    id: "4",
    column: "done",
  },
  {
    title: "Set up CI/CD pipeline",
    id: "5",
    column: "backlog",
  },
  {
    title: "Create unit tests for components",
    id: "6",
    column: "todo",
  },
  {
    title: "Refactor legacy code",
    id: "7",
    column: "doing",
  },
  {
    title: "Update dependencies",
    id: "8",
    column: "todo",
  },
  {
    title: "Research new technologies for the project",
    id: "9",
    column: "backlog",
  },
  {
    title: "Prepare presentation for stakeholders",
    id: "10",
    column: "todo",
  },
  {
    title: "Debug issues reported by QA",
    id: "11",
    column: "doing",
  },
  {
    title: "Deploy the latest version to production",
    id: "12",
    column: "done",
  },
];
