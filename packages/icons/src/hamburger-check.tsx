import { mdiHamburgerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HamburgerCheck(props: IconComponentProps) {
  return <Icon path={mdiHamburgerCheck} {...props} />;
}

export { mdiHamburgerCheck as path };
