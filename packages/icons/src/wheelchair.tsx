import { mdiWheelchair } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wheelchair(props: IconComponentProps) {
  return <Icon path={mdiWheelchair} {...props} />;
}

export { mdiWheelchair as path };
