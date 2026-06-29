import { mdiTrayRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayRemove(props: IconComponentProps) {
  return <Icon path={mdiTrayRemove} {...props} />;
}

export { mdiTrayRemove as path };
