import { mdiTrayArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayArrowUp(props: IconComponentProps) {
  return <Icon path={mdiTrayArrowUp} {...props} />;
}

export { mdiTrayArrowUp as path };
