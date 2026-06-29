import { mdiCamera } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Camera(props: IconComponentProps) {
  return <Icon path={mdiCamera} {...props} />;
}

export { mdiCamera as path };
