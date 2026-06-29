import { mdiBullhorn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bullhorn(props: IconComponentProps) {
  return <Icon path={mdiBullhorn} {...props} />;
}

export { mdiBullhorn as path };
