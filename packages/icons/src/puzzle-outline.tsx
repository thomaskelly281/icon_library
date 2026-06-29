import { mdiPuzzleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleOutline} {...props} />;
}

export { mdiPuzzleOutline as path };
