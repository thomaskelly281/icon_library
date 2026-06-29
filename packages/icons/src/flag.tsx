import { mdiFlag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Flag(props: IconComponentProps) {
  return <Icon path={mdiFlag} {...props} />;
}

export { mdiFlag as path };
