import { mdiPuzzleRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleRemove(props: IconComponentProps) {
  return <Icon path={mdiPuzzleRemove} {...props} />;
}

export { mdiPuzzleRemove as path };
