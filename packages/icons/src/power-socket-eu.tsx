import { mdiPowerSocketEu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSocketEu(props: IconComponentProps) {
  return <Icon path={mdiPowerSocketEu} {...props} />;
}

export { mdiPowerSocketEu as path };
