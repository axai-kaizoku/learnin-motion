import Basics from "../basics";
import Controls from "../controls";
import Gestures from "../gestures";

type Props = { selectedComponent: string };

export default function ComponentRenderer({ selectedComponent }: Props) {
  switch (selectedComponent) {
    case "Basics":
      return <Basics />;
    case "Gestures":
      return <Gestures />;
    case "Controls":
      return <Controls />;
    default:
      return null;
  }
}
