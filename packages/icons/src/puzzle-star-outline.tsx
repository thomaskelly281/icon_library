import { mdiPuzzleStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleStarOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleStarOutline} {...props} />;
}

export { mdiPuzzleStarOutline as path };
