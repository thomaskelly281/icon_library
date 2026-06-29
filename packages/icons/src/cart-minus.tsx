import { mdiCartMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartMinus(props: IconComponentProps) {
  return <Icon path={mdiCartMinus} {...props} />;
}

export { mdiCartMinus as path };
