import { mdiMessageText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageText(props: IconComponentProps) {
  return <Icon path={mdiMessageText} {...props} />;
}

export { mdiMessageText as path };
