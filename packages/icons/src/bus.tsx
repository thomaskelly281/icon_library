import { mdiBus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bus(props: IconComponentProps) {
  return <Icon path={mdiBus} {...props} />;
}

export { mdiBus as path };
