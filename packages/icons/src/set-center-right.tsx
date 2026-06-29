import { mdiSetCenterRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetCenterRight(props: IconComponentProps) {
  return <Icon path={mdiSetCenterRight} {...props} />;
}

export { mdiSetCenterRight as path };
