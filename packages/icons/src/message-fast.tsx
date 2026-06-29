import { mdiMessageFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageFast(props: IconComponentProps) {
  return <Icon path={mdiMessageFast} {...props} />;
}

export { mdiMessageFast as path };
