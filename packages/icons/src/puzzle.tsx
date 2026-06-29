import { mdiPuzzle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Puzzle(props: IconComponentProps) {
  return <Icon path={mdiPuzzle} {...props} />;
}

export { mdiPuzzle as path };
