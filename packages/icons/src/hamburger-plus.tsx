import { mdiHamburgerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HamburgerPlus(props: IconComponentProps) {
  return <Icon path={mdiHamburgerPlus} {...props} />;
}

export { mdiHamburgerPlus as path };
