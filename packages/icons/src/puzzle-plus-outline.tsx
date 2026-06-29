import { mdiPuzzlePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzlePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiPuzzlePlusOutline} {...props} />;
}

export { mdiPuzzlePlusOutline as path };
