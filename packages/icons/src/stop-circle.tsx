import { mdiStopCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StopCircle(props: IconComponentProps) {
  return <Icon path={mdiStopCircle} {...props} />;
}

export { mdiStopCircle as path };
