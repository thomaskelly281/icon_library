import { mdiNetworkStrengthOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrengthOff(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrengthOff} {...props} />;
}

export { mdiNetworkStrengthOff as path };
