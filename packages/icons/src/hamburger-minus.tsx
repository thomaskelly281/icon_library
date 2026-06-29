import { mdiHamburgerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HamburgerMinus(props: IconComponentProps) {
  return <Icon path={mdiHamburgerMinus} {...props} />;
}

export { mdiHamburgerMinus as path };
