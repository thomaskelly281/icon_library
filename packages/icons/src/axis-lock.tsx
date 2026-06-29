import { mdiAxisLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisLock(props: IconComponentProps) {
  return <Icon path={mdiAxisLock} {...props} />;
}

export { mdiAxisLock as path };
