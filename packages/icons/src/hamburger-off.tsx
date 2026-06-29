import { mdiHamburgerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HamburgerOff(props: IconComponentProps) {
  return <Icon path={mdiHamburgerOff} {...props} />;
}

export { mdiHamburgerOff as path };
