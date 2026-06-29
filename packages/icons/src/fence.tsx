import { mdiFence } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fence(props: IconComponentProps) {
  return <Icon path={mdiFence} {...props} />;
}

export { mdiFence as path };
