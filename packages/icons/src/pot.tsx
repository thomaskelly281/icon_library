import { mdiPot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pot(props: IconComponentProps) {
  return <Icon path={mdiPot} {...props} />;
}

export { mdiPot as path };
