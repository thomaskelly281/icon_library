import { mdiNetworkStrength1Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength1Alert(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength1Alert} {...props} />;
}

export { mdiNetworkStrength1Alert as path };
