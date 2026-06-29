import { mdiRayEndArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RayEndArrow(props: IconComponentProps) {
  return <Icon path={mdiRayEndArrow} {...props} />;
}

export { mdiRayEndArrow as path };
