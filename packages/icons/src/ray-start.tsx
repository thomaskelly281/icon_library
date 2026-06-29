import { mdiRayStart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RayStart(props: IconComponentProps) {
  return <Icon path={mdiRayStart} {...props} />;
}

export { mdiRayStart as path };
