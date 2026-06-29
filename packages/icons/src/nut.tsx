import { mdiNut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nut(props: IconComponentProps) {
  return <Icon path={mdiNut} {...props} />;
}

export { mdiNut as path };
