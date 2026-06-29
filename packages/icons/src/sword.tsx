import { mdiSword } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sword(props: IconComponentProps) {
  return <Icon path={mdiSword} {...props} />;
}

export { mdiSword as path };
