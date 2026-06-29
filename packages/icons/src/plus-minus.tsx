import { mdiPlusMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusMinus(props: IconComponentProps) {
  return <Icon path={mdiPlusMinus} {...props} />;
}

export { mdiPlusMinus as path };
