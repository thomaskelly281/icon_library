import { mdiNetworkStrength4 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength4(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength4} {...props} />;
}

export { mdiNetworkStrength4 as path };
