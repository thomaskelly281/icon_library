import { mdiRestart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Restart(props: IconComponentProps) {
  return <Icon path={mdiRestart} {...props} />;
}

export { mdiRestart as path };
