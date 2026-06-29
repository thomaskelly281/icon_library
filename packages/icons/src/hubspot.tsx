import { mdiHubspot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hubspot(props: IconComponentProps) {
  return <Icon path={mdiHubspot} {...props} />;
}

export { mdiHubspot as path };
