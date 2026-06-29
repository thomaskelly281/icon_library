import { mdiNetworkStrength3 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength3(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength3} {...props} />;
}

export { mdiNetworkStrength3 as path };
