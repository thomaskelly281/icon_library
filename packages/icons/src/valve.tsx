import { mdiValve } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Valve(props: IconComponentProps) {
  return <Icon path={mdiValve} {...props} />;
}

export { mdiValve as path };
