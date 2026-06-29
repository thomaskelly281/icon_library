import { mdiRayEnd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RayEnd(props: IconComponentProps) {
  return <Icon path={mdiRayEnd} {...props} />;
}

export { mdiRayEnd as path };
