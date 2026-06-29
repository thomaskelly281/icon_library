import { mdiCartRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartRemove(props: IconComponentProps) {
  return <Icon path={mdiCartRemove} {...props} />;
}

export { mdiCartRemove as path };
