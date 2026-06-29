import { mdiEyeCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeCheck(props: IconComponentProps) {
  return <Icon path={mdiEyeCheck} {...props} />;
}

export { mdiEyeCheck as path };
