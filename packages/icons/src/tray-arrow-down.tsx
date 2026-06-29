import { mdiTrayArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayArrowDown(props: IconComponentProps) {
  return <Icon path={mdiTrayArrowDown} {...props} />;
}

export { mdiTrayArrowDown as path };
