import { mdiCartPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartPercent(props: IconComponentProps) {
  return <Icon path={mdiCartPercent} {...props} />;
}

export { mdiCartPercent as path };
