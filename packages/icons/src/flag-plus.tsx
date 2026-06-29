import { mdiFlagPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagPlus(props: IconComponentProps) {
  return <Icon path={mdiFlagPlus} {...props} />;
}

export { mdiFlagPlus as path };
