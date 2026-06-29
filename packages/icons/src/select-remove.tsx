import { mdiSelectRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectRemove(props: IconComponentProps) {
  return <Icon path={mdiSelectRemove} {...props} />;
}

export { mdiSelectRemove as path };
