import { mdiAxisXYArrowLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisXyArrowLock(props: IconComponentProps) {
  return <Icon path={mdiAxisXYArrowLock} {...props} />;
}

export { mdiAxisXYArrowLock as path };
