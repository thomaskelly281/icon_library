import { mdiClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Close(props: IconComponentProps) {
  return <Icon path={mdiClose} {...props} />;
}

export { mdiClose as path };
