import { mdiNetworkStrength3Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength3Alert(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength3Alert} {...props} />;
}

export { mdiNetworkStrength3Alert as path };
