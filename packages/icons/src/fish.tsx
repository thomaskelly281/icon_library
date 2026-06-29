import { mdiFish } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fish(props: IconComponentProps) {
  return <Icon path={mdiFish} {...props} />;
}

export { mdiFish as path };
