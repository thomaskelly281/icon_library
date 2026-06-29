import { mdiPowerSocketIt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSocketIt(props: IconComponentProps) {
  return <Icon path={mdiPowerSocketIt} {...props} />;
}

export { mdiPowerSocketIt as path };
