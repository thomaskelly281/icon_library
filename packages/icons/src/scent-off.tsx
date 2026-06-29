import { mdiScentOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScentOff(props: IconComponentProps) {
  return <Icon path={mdiScentOff} {...props} />;
}

export { mdiScentOff as path };
