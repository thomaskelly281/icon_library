import { mdiCartCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartCheck(props: IconComponentProps) {
  return <Icon path={mdiCartCheck} {...props} />;
}

export { mdiCartCheck as path };
