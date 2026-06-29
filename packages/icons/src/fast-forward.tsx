import { mdiFastForward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FastForward(props: IconComponentProps) {
  return <Icon path={mdiFastForward} {...props} />;
}

export { mdiFastForward as path };
