import { mdiSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Send(props: IconComponentProps) {
  return <Icon path={mdiSend} {...props} />;
}

export { mdiSend as path };
