import { mdiPowerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerOff(props: IconComponentProps) {
  return <Icon path={mdiPowerOff} {...props} />;
}

export { mdiPowerOff as path };
