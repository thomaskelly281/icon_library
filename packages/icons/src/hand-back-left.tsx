import { mdiHandBackLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandBackLeft(props: IconComponentProps) {
  return <Icon path={mdiHandBackLeft} {...props} />;
}

export { mdiHandBackLeft as path };
