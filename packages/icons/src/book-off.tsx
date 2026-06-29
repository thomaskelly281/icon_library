import { mdiBookOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookOff(props: IconComponentProps) {
  return <Icon path={mdiBookOff} {...props} />;
}

export { mdiBookOff as path };
