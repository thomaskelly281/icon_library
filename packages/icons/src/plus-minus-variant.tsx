import { mdiPlusMinusVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusMinusVariant(props: IconComponentProps) {
  return <Icon path={mdiPlusMinusVariant} {...props} />;
}

export { mdiPlusMinusVariant as path };
