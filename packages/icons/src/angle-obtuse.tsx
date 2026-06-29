import { mdiAngleObtuse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AngleObtuse(props: IconComponentProps) {
  return <Icon path={mdiAngleObtuse} {...props} />;
}

export { mdiAngleObtuse as path };
