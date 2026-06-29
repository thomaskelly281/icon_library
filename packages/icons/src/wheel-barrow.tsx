import { mdiWheelBarrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WheelBarrow(props: IconComponentProps) {
  return <Icon path={mdiWheelBarrow} {...props} />;
}

export { mdiWheelBarrow as path };
