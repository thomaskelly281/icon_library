import { mdiTrayFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrayFull(props: IconComponentProps) {
  return <Icon path={mdiTrayFull} {...props} />;
}

export { mdiTrayFull as path };
