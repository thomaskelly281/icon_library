import { mdiRayStartArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RayStartArrow(props: IconComponentProps) {
  return <Icon path={mdiRayStartArrow} {...props} />;
}

export { mdiRayStartArrow as path };
