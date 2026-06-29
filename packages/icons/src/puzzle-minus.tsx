import { mdiPuzzleMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleMinus(props: IconComponentProps) {
  return <Icon path={mdiPuzzleMinus} {...props} />;
}

export { mdiPuzzleMinus as path };
