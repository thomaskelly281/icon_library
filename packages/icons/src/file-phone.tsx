import { mdiFilePhone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePhone(props: IconComponentProps) {
  return <Icon path={mdiFilePhone} {...props} />;
}

export { mdiFilePhone as path };
