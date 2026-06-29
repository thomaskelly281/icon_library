import { mdiMenuOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuOpen(props: IconComponentProps) {
  return <Icon path={mdiMenuOpen} {...props} />;
}

export { mdiMenuOpen as path };
