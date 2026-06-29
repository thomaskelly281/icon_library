import { mdiPillOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PillOff(props: IconComponentProps) {
  return <Icon path={mdiPillOff} {...props} />;
}

export { mdiPillOff as path };
