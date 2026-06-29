import { mdiPuzzleEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleEditOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzleEditOutline} {...props} />;
}

export { mdiPuzzleEditOutline as path };
