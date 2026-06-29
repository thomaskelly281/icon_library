import { mdiPhone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Phone(props: IconComponentProps) {
  return <Icon path={mdiPhone} {...props} />;
}

export { mdiPhone as path };
