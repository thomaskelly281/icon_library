import { mdiPuzzleHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleHeartOutline} {...props} />;
}

export { mdiPuzzleHeartOutline as path };
