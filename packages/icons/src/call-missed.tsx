import { mdiCallMissed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CallMissed(props: IconComponentProps) {
  return <Icon path={mdiCallMissed} {...props} />;
}

export { mdiCallMissed as path };
