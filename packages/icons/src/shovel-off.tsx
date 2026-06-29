import { mdiShovelOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShovelOff(props: IconComponentProps) {
  return <Icon path={mdiShovelOff} {...props} />;
}

export { mdiShovelOff as path };
