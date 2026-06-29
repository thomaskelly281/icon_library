import { mdiCartOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartOff(props: IconComponentProps) {
  return <Icon path={mdiCartOff} {...props} />;
}

export { mdiCartOff as path };
