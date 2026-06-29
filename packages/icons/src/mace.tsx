import { mdiMace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mace(props: IconComponentProps) {
  return <Icon path={mdiMace} {...props} />;
}

export { mdiMace as path };
