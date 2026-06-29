import { mdiSendCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendCircle(props: IconComponentProps) {
  return <Icon path={mdiSendCircle} {...props} />;
}

export { mdiSendCircle as path };
