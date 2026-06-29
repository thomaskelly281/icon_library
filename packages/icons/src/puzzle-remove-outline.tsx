import { mdiPuzzleRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleRemoveOutline} {...props} />;
}

export { mdiPuzzleRemoveOutline as path };
