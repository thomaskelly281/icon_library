import { mdiLinkCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkCircle(props: IconComponentProps) {
  return <Icon path={mdiLinkCircle} {...props} />;
}

export { mdiLinkCircle as path };
