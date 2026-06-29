import { mdiPawOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PawOff(props: IconComponentProps) {
  return <Icon path={mdiPawOff} {...props} />;
}

export { mdiPawOff as path };
