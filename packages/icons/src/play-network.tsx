import { mdiPlayNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayNetwork(props: IconComponentProps) {
  return <Icon path={mdiPlayNetwork} {...props} />;
}

export { mdiPlayNetwork as path };
