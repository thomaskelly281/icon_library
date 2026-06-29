import { mdiSimOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SimOff(props: IconComponentProps) {
  return <Icon path={mdiSimOff} {...props} />;
}

export { mdiSimOff as path };
