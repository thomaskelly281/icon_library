import { mdiSteering } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Steering(props: IconComponentProps) {
  return <Icon path={mdiSteering} {...props} />;
}

export { mdiSteering as path };
