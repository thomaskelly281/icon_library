import { mdiAccessPointOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointOff(props: IconComponentProps) {
  return <Icon path={mdiAccessPointOff} {...props} />;
}

export { mdiAccessPointOff as path };
