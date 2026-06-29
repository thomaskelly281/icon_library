import { mdiTrafficCone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrafficCone(props: IconComponentProps) {
  return <Icon path={mdiTrafficCone} {...props} />;
}

export { mdiTrafficCone as path };
