import { mdiMonitorArrowDownVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MonitorArrowDownVariant(props: IconComponentProps) {
  return <Icon path={mdiMonitorArrowDownVariant} {...props} />;
}

export { mdiMonitorArrowDownVariant as path };
