import { mdiPowerCycle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerCycle(props: IconComponentProps) {
  return <Icon path={mdiPowerCycle} {...props} />;
}

export { mdiPowerCycle as path };
