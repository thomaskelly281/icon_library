import { mdiPowerPlug } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerPlug(props: IconComponentProps) {
  return <Icon path={mdiPowerPlug} {...props} />;
}

export { mdiPowerPlug as path };
