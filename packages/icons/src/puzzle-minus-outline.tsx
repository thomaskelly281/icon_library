import { mdiPuzzleMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleMinusOutline} {...props} />;
}

export { mdiPuzzleMinusOutline as path };
