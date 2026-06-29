import { mdiPuzzlePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzlePlus(props: IconComponentProps) {
  return <Icon path={mdiPuzzlePlus} {...props} />;
}

export { mdiPuzzlePlus as path };
