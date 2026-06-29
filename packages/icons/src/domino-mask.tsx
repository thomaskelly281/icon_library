import { mdiDominoMask } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DominoMask(props: IconComponentProps) {
  return <Icon path={mdiDominoMask} {...props} />;
}

export { mdiDominoMask as path };
