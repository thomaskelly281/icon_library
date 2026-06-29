import { mdiEyeRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeRefresh(props: IconComponentProps) {
  return <Icon path={mdiEyeRefresh} {...props} />;
}

export { mdiEyeRefresh as path };
