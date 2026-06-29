import { mdiFanOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanOff(props: IconComponentProps) {
  return <Icon path={mdiFanOff} {...props} />;
}

export { mdiFanOff as path };
