import { mdiFlagOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagOff(props: IconComponentProps) {
  return <Icon path={mdiFlagOff} {...props} />;
}

export { mdiFlagOff as path };
