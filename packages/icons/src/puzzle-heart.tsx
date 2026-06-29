import { mdiPuzzleHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PuzzleHeart(props: IconComponentProps) {
  return <Icon path={mdiPuzzleHeart} {...props} />;
}

export { mdiPuzzleHeart as path };
