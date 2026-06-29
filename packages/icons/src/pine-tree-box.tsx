import { mdiPineTreeBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PineTreeBox(props: IconComponentProps) {
  return <Icon path={mdiPineTreeBox} {...props} />;
}

export { mdiPineTreeBox as path };
