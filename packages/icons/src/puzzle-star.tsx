import { mdiPuzzleStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleStar(props: IconComponentProps) {
  return <Icon path={mdiPuzzleStar} {...props} />;
}

export { mdiPuzzleStar as path };
