import { mdiAxisArrowLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxisArrowLock(props: IconComponentProps) {
  return <Icon path={mdiAxisArrowLock} {...props} />;
}

export { mdiAxisArrowLock as path };
