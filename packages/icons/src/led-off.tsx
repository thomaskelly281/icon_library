import { mdiLedOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedOff(props: IconComponentProps) {
  return <Icon path={mdiLedOff} {...props} />;
}

export { mdiLedOff as path };
