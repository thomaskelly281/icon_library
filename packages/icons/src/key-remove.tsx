import { mdiKeyRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyRemove(props: IconComponentProps) {
  return <Icon path={mdiKeyRemove} {...props} />;
}

export { mdiKeyRemove as path };
