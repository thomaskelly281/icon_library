import { mdiStairs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stairs(props: IconComponentProps) {
  return <Icon path={mdiStairs} {...props} />;
}

export { mdiStairs as path };
