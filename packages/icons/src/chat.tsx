import { mdiChat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Chat(props: IconComponentProps) {
  return <Icon path={mdiChat} {...props} />;
}

export { mdiChat as path };
