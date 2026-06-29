import { mdiEyeRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeRemove(props: IconComponentProps) {
  return <Icon path={mdiEyeRemove} {...props} />;
}

export { mdiEyeRemove as path };
