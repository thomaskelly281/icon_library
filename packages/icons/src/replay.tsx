import { mdiReplay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Replay(props: IconComponentProps) {
  return <Icon path={mdiReplay} {...props} />;
}

export { mdiReplay as path };
