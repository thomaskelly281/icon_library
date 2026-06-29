import { mdiShopping } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shopping(props: IconComponentProps) {
  return <Icon path={mdiShopping} {...props} />;
}

export { mdiShopping as path };
