import { mdiBasketballHoop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketballHoop(props: IconComponentProps) {
  return <Icon path={mdiBasketballHoop} {...props} />;
}

export { mdiBasketballHoop as path };
