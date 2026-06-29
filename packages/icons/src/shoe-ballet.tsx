import { mdiShoeBallet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoeBallet(props: IconComponentProps) {
  return <Icon path={mdiShoeBallet} {...props} />;
}

export { mdiShoeBallet as path };
