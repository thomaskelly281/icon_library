import { mdiDesktopTower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DesktopTower(props: IconComponentProps) {
  return <Icon path={mdiDesktopTower} {...props} />;
}

export { mdiDesktopTower as path };
