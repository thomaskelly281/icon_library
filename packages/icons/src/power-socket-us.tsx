import { mdiPowerSocketUs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSocketUs(props: IconComponentProps) {
  return <Icon path={mdiPowerSocketUs} {...props} />;
}

export { mdiPowerSocketUs as path };
