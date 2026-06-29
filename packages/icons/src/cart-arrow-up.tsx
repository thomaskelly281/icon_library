import { mdiCartArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartArrowUp(props: IconComponentProps) {
  return <Icon path={mdiCartArrowUp} {...props} />;
}

export { mdiCartArrowUp as path };
