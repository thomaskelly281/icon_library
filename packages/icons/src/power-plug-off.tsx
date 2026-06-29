import { mdiPowerPlugOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerPlugOff(props: IconComponentProps) {
  return <Icon path={mdiPowerPlugOff} {...props} />;
}

export { mdiPowerPlugOff as path };
