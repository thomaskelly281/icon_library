import { mdiPickaxe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pickaxe(props: IconComponentProps) {
  return <Icon path={mdiPickaxe} {...props} />;
}

export { mdiPickaxe as path };
