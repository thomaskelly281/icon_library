import { mdiRayVertex } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RayVertex(props: IconComponentProps) {
  return <Icon path={mdiRayVertex} {...props} />;
}

export { mdiRayVertex as path };
