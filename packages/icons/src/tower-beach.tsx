import { mdiTowerBeach } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TowerBeach(props: IconComponentProps) {
  return <Icon path={mdiTowerBeach} {...props} />;
}

export { mdiTowerBeach as path };
