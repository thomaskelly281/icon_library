import { mdiAccessPoint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPoint(props: IconComponentProps) {
  return <Icon path={mdiAccessPoint} {...props} />;
}

export { mdiAccessPoint as path };
