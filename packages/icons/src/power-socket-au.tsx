import { mdiPowerSocketAu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSocketAu(props: IconComponentProps) {
  return <Icon path={mdiPowerSocketAu} {...props} />;
}

export { mdiPowerSocketAu as path };
