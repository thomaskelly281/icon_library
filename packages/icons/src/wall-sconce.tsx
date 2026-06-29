import { mdiWallSconce } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WallSconce(props: IconComponentProps) {
  return <Icon path={mdiWallSconce} {...props} />;
}

export { mdiWallSconce as path };
