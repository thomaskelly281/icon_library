import { mdiLaserPointer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LaserPointer(props: IconComponentProps) {
  return <Icon path={mdiLaserPointer} {...props} />;
}

export { mdiLaserPointer as path };
