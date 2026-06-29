import { mdiCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Circle(props: IconComponentProps) {
  return <Icon path={mdiCircle} {...props} />;
}

export { mdiCircle as path };
