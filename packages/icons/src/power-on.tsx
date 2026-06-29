import { mdiPowerOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerOn(props: IconComponentProps) {
  return <Icon path={mdiPowerOn} {...props} />;
}

export { mdiPowerOn as path };
