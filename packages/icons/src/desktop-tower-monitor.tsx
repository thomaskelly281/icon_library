import { mdiDesktopTowerMonitor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DesktopTowerMonitor(props: IconComponentProps) {
  return <Icon path={mdiDesktopTowerMonitor} {...props} />;
}

export { mdiDesktopTowerMonitor as path };
