import { mdiCartPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartPlus(props: IconComponentProps) {
  return <Icon path={mdiCartPlus} {...props} />;
}

export { mdiCartPlus as path };
