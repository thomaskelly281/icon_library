import { mdiNetworkPos } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkPos(props: IconComponentProps) {
  return <Icon path={mdiNetworkPos} {...props} />;
}

export { mdiNetworkPos as path };
