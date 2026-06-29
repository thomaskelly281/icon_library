import { mdiHandBackRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandBackRight(props: IconComponentProps) {
  return <Icon path={mdiHandBackRight} {...props} />;
}

export { mdiHandBackRight as path };
