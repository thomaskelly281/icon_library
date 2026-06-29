import { mdiLedStrip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedStrip(props: IconComponentProps) {
  return <Icon path={mdiLedStrip} {...props} />;
}

export { mdiLedStrip as path };
