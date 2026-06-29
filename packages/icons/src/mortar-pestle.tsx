import { mdiMortarPestle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MortarPestle(props: IconComponentProps) {
  return <Icon path={mdiMortarPestle} {...props} />;
}

export { mdiMortarPestle as path };
