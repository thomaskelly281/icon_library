import { mdiEyeClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeClosed(props: IconComponentProps) {
  return <Icon path={mdiEyeClosed} {...props} />;
}

export { mdiEyeClosed as path };
