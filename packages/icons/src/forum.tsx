import { mdiForum } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Forum(props: IconComponentProps) {
  return <Icon path={mdiForum} {...props} />;
}

export { mdiForum as path };
