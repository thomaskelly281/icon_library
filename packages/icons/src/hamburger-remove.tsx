import { mdiHamburgerRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HamburgerRemove(props: IconComponentProps) {
  return <Icon path={mdiHamburgerRemove} {...props} />;
}

export { mdiHamburgerRemove as path };
