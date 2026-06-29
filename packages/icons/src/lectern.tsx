import { mdiLectern } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lectern(props: IconComponentProps) {
  return <Icon path={mdiLectern} {...props} />;
}

export { mdiLectern as path };
