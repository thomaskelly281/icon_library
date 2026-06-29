import { mdiHamburger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hamburger(props: IconComponentProps) {
  return <Icon path={mdiHamburger} {...props} />;
}

export { mdiHamburger as path };
