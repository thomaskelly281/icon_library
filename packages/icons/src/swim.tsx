import { mdiSwim } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Swim(props: IconComponentProps) {
  return <Icon path={mdiSwim} {...props} />;
}

export { mdiSwim as path };
