import { mdiTowerFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TowerFire(props: IconComponentProps) {
  return <Icon path={mdiTowerFire} {...props} />;
}

export { mdiTowerFire as path };
