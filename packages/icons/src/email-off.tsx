import { mdiEmailOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailOff(props: IconComponentProps) {
  return <Icon path={mdiEmailOff} {...props} />;
}

export { mdiEmailOff as path };
