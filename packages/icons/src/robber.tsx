import { mdiRobber } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Robber(props: IconComponentProps) {
  return <Icon path={mdiRobber} {...props} />;
}

export { mdiRobber as path };
