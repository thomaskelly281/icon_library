import { mdiMessage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Message(props: IconComponentProps) {
  return <Icon path={mdiMessage} {...props} />;
}

export { mdiMessage as path };
