import { mdiPuzzleCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleCheckOutline} {...props} />;
}

export { mdiPuzzleCheckOutline as path };
