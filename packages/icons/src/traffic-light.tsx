import { mdiTrafficLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TrafficLight(props: IconComponentProps) {
  return <Icon path={mdiTrafficLight} {...props} />;
}

export { mdiTrafficLight as path };
