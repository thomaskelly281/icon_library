import { mdiCartVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CartVariant(props: IconComponentProps) {
  return <Icon path={mdiCartVariant} {...props} />;
}

export { mdiCartVariant as path };
