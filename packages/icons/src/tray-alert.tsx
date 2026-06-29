import { mdiTrayAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayAlert(props: IconComponentProps) {
  return <Icon path={mdiTrayAlert} {...props} />;
}

export { mdiTrayAlert as path };
