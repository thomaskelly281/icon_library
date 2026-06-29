import { mdiSunAngle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunAngle(props: IconComponentProps) {
  return <Icon path={mdiSunAngle} {...props} />;
}

export { mdiSunAngle as path };
