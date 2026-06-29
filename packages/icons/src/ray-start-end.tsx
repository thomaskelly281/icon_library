import { mdiRayStartEnd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RayStartEnd(props: IconComponentProps) {
  return <Icon path={mdiRayStartEnd} {...props} />;
}

export { mdiRayStartEnd as path };
