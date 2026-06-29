import { mdiWallFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WallFire(props: IconComponentProps) {
  return <Icon path={mdiWallFire} {...props} />;
}

export { mdiWallFire as path };
