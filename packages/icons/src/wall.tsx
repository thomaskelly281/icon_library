import { mdiWall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wall(props: IconComponentProps) {
  return <Icon path={mdiWall} {...props} />;
}

export { mdiWall as path };
