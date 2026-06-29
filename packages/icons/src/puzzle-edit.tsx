import { mdiPuzzleEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleEdit(props: IconComponentProps) {
  return <Icon path={mdiPuzzleEdit} {...props} />;
}

export { mdiPuzzleEdit as path };
