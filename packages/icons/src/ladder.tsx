import { mdiLadder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ladder(props: IconComponentProps) {
  return <Icon path={mdiLadder} {...props} />;
}

export { mdiLadder as path };
