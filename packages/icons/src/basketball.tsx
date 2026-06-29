import { mdiBasketball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Basketball(props: IconComponentProps) {
  return <Icon path={mdiBasketball} {...props} />;
}

export { mdiBasketball as path };
