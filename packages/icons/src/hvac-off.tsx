import { mdiHvacOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HvacOff(props: IconComponentProps) {
  return <Icon path={mdiHvacOff} {...props} />;
}

export { mdiHvacOff as path };
