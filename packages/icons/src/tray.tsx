import { mdiTray } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tray(props: IconComponentProps) {
  return <Icon path={mdiTray} {...props} />;
}

export { mdiTray as path };
