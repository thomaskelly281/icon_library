import { mdiAngleAcute } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AngleAcute(props: IconComponentProps) {
  return <Icon path={mdiAngleAcute} {...props} />;
}

export { mdiAngleAcute as path };
