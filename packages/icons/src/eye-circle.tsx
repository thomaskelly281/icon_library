import { mdiEyeCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeCircle(props: IconComponentProps) {
  return <Icon path={mdiEyeCircle} {...props} />;
}

export { mdiEyeCircle as path };
