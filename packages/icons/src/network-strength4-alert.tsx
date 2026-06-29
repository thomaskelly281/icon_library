import { mdiNetworkStrength4Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength4Alert(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength4Alert} {...props} />;
}

export { mdiNetworkStrength4Alert as path };
