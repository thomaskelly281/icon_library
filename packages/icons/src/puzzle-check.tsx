import { mdiPuzzleCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleCheck(props: IconComponentProps) {
  return <Icon path={mdiPuzzleCheck} {...props} />;
}

export { mdiPuzzleCheck as path };
