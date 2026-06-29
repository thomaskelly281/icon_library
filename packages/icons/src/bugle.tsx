import { mdiBugle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bugle(props: IconComponentProps) {
  return <Icon path={mdiBugle} {...props} />;
}

export { mdiBugle as path };
