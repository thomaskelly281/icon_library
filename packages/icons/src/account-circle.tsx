import { mdiAccountCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCircle(props: IconComponentProps) {
  return <Icon path={mdiAccountCircle} {...props} />;
}

export { mdiAccountCircle as path };
