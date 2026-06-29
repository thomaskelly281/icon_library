import { mdiCartArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartArrowDown(props: IconComponentProps) {
  return <Icon path={mdiCartArrowDown} {...props} />;
}

export { mdiCartArrowDown as path };
