import { mdiNetworkStrength1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength1(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength1} {...props} />;
}

export { mdiNetworkStrength1 as path };
