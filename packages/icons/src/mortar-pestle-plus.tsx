import { mdiMortarPestlePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MortarPestlePlus(props: IconComponentProps) {
  return <Icon path={mdiMortarPestlePlus} {...props} />;
}

export { mdiMortarPestlePlus as path };
