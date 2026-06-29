import { mdiMouseScrollWheel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseScrollWheel(props: IconComponentProps) {
  return <Icon path={mdiMouseScrollWheel} {...props} />;
}

export { mdiMouseScrollWheel as path };
