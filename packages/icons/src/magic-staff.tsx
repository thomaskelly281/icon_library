import { mdiMagicStaff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagicStaff(props: IconComponentProps) {
  return <Icon path={mdiMagicStaff} {...props} />;
}

export { mdiMagicStaff as path };
