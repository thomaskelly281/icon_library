import { mdiEyeMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeMinus(props: IconComponentProps) {
  return <Icon path={mdiEyeMinus} {...props} />;
}

export { mdiEyeMinus as path };
