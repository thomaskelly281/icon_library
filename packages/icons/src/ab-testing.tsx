import { mdiAbTesting } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AbTesting(props: IconComponentProps) {
  return <Icon path={mdiAbTesting} {...props} />;
}

export { mdiAbTesting as path };
