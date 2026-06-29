import { mdiPowerSleep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSleep(props: IconComponentProps) {
  return <Icon path={mdiPowerSleep} {...props} />;
}

export { mdiPowerSleep as path };
