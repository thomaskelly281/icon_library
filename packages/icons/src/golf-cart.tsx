import { mdiGolfCart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GolfCart(props: IconComponentProps) {
  return <Icon path={mdiGolfCart} {...props} />;
}

export { mdiGolfCart as path };
