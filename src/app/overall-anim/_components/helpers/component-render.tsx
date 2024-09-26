import Basics from "../basics";
import Controls from "../controls";
import Gestures from "../gestures";
import ScrollBased from "../scroll-based";
import ViewBased from "../view-based";

type Props = { selectedComponent: string };

export default function ComponentRenderer({ selectedComponent }: Props) {
  switch (selectedComponent) {
    case "Basics":
      return <Basics />;
    case "Gestures":
      return <Gestures />;
    case "Controls":
      return <Controls />;
    case "ViewBased":
      return <ViewBased />;
    case "ScrollBased":
      return <ScrollBased />;
    default:
      return null;
  }
}
