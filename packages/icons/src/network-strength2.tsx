import { mdiNetworkStrength2 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrength2(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrength2} {...props} />;
}

export { mdiNetworkStrength2 as path };
