import { mdiLedOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedOn(props: IconComponentProps) {
  return <Icon path={mdiLedOn} {...props} />;
}

export { mdiLedOn as path };
