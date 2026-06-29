import { mdiEmoticonRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmoticonRemove(props: IconComponentProps) {
  return <Icon path={mdiEmoticonRemove} {...props} />;
}

export { mdiEmoticonRemove as path };
