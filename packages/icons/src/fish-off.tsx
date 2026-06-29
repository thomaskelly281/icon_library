import { mdiFishOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FishOff(props: IconComponentProps) {
  return <Icon path={mdiFishOff} {...props} />;
}

export { mdiFishOff as path };
