import { mdiNetworkStrength2Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength2Alert(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength2Alert} {...props} />;
}

export { mdiNetworkStrength2Alert as path };
