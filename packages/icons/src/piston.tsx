import { mdiPiston } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Piston(props: IconComponentProps) {
  return <Icon path={mdiPiston} {...props} />;
}

export { mdiPiston as path };
