import { mdiAtm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Atm(props: IconComponentProps) {
  return <Icon path={mdiAtm} {...props} />;
}

export { mdiAtm as path };
