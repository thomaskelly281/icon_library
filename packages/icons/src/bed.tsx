import { mdiBed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bed(props: IconComponentProps) {
  return <Icon path={mdiBed} {...props} />;
}

export { mdiBed as path };
